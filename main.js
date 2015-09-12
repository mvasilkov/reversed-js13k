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
        /* Should not happen */
        level = levels.length - 1
    }

    paintLevel(currentLevel = level)
    platforms = levels[level].p
    walls = levels[level].w
    spikes = levels[level].s

    if (level == levels.length - 1) {
        paintEnding()
        aa.play('win')
    }
    else if (level) aa.play(level == 1? 'bip': 'lvl')
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
    if (!character.grip && expectation.grip)
        aa.play('lnd')
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


    charAnimate((now >>> 6) % 6 /* charAnimation.length */)

    return t
}


var playingGame = false
var enableMusic = true

function idleMainloop() {
    var now = Date.now()
    var t = now - then
    then = now

    if (playingGame)
        return

    requestAnimationFrame(idleMainloop)

    paintBackdrop(t * character.g)

    if (enableMusic && !isMobile)
        doMusic(t)
}

then = Date.now()
requestAnimationFrame(idleMainloop)

function mainloop() {
    requestAnimationFrame(mainloop)

    if (character.x + character.width > 940) {
        character = initCharacter()
        nextPalette()
        initLevel(currentLevel + 1)
    }

    /* did he dieded? */

    for (var i = spikes.length; i--;) {
        if (overlap(character, spikes[i])) {
            aa.play('die')
            character = initCharacter()
            break
        }
    }

    var t = computeCharacter()
    paintBackdrop(t * character.g)

    asciileft = character.x
    asciitop = character.y
    asciiUpdate()

    if (enableMusic && !isMobile)
        doMusic(t)
}

function newGame(event) {
    event.preventDefault()

    if (playingGame)
        return

    playingGame = true

    $s.style.display = $t.style.display = 'none'
    $i.style.pointerEvents = 'auto'

    character = initCharacter()
    nextPalette()
    initLevel(1)

    then = Date.now()
    requestAnimationFrame(mainloop)
}

$s.addEventListener('click', newGame)
$s.addEventListener('touchstart', newGame)


initializeMusic()

var mcount = 0

function doMusic(t) {
    mcount += t
    if (mcount >= 300) {
        mcount = mcount % 300
        playLoop()
    }
}


//newGame({preventDefault: function(){}})
