function initCharacter() {
    asciireversed = false
    return {
        x: 10,
        y: 0.5 * (cheight - playerheight),
        width: playerwidth,
        height: playerheight,
        g: 0.1,
        grip: false,
        velocityx: 4,
        velocityy: 0
    }
}

function initLevel(level) {
    if (level >= levels.length) {
        // TODO ending
        level = levels.length - 1
    }

    paintLevel(currentLevel = level)
    platforms = levels[level].p
    walls = levels[level].w
    spikes = levels[level].s
}

var character = initCharacter()

var currentLevel
var platforms, walls, spikes

initLevel(0)

var then

function computeCharacter() {
    var now = Date.now()
    var t = now - then
    then = now

    if (character.grip) {
        character.velocityx += t * 0.1
        if (character.velocityx > 4)
            character.velocityx = 4
    }
    character.velocityy += t * character.g

    var position
    if (character.velocityy < 0) {
        position = [{x: character.x, y: character.y}]
    }
    else {
        position = [{x: character.x, y: character.y + character.height}]
    }
    position.push({x: position[0].x + character.width, y: position[0].y})

    var expectation = [{
        x: position[0].x + character.velocityx,
        y: position[0].y + character.velocityy
    }]
    expectation.push({x: expectation[0].x + character.width, y: expectation[0].y})

    expectation.velocityy = character.velocityy
    expectation.grip = false

    platforms.forEach(function (platform) {
        collide(position, expectation, platform)
    })

    if (character.velocityy < 0) {
        character.y = expectation[0].y
    }
    else {
        character.y = expectation[0].y - character.height
    }
    character.velocityy = expectation.velocityy
    character.grip = expectation.grip

    /* magic */

    position = [{x: character.y, y: character.x + character.width}]
    position.push({x: position[0].x + character.height, y: position[0].y})

    expectation = [{
        x: position[0].x + character.velocityy,
        y: position[0].y + character.velocityx
    }]
    expectation.push({x: expectation[0].x + character.height, y: expectation[0].y})

    expectation.velocityy = character.velocityx

    walls.forEach(function (platform) {
        platform = [{x: platform[0].y, y: platform[0].x}, {x: platform[1].y, y: platform[1].x}]
        collide(position, expectation, platform)
    })

    character.x = expectation[0].y - character.width
    character.velocityx = expectation.velocityy


    charAnimate((now >>> 6) % charAnimation.length)

    return t
}

function mainloop() {
    requestAnimationFrame(mainloop)

    if (character.x + character.width > 940) {
        character = initCharacter()
        initLevel(currentLevel + 1)
    }

    /* did he dieded? */

    for (i = spikes.length; i--;) {
        if (overlap(character, spikes[i])) {
            character = initCharacter()
            break
        }
    }

    paintBackdrop(computeCharacter() * character.g)

    asciileft = character.x
    asciitop = character.y
    asciiUpdate()
}

then = Date.now()
requestAnimationFrame(mainloop)
