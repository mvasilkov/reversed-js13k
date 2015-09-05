var character = {
    x: 10,
    y: 0.5 * (cheight - playerheight),
    width: playerwidth,
    height: playerheight,
    g: 0.1,
    velocityx: 4,
    velocityy: 0
}

var currentLevel = 0
var platforms = levels[currentLevel].p
var walls = levels[currentLevel].w

var then

function computeCharacter() {
    var now = Date.now()
    var t = now - then
    then = now

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
}

function mainloop() {
    requestAnimationFrame(mainloop)
    computeCharacter()

    asciileft = character.x
    asciitop = character.y
    asciiUpdate()
}

then = Date.now()
requestAnimationFrame(mainloop)
