var cellsize = 60
var xxxxxxxxxxxxxxxx = ['xxxxxxxxxxxxxxxx']

levels = levels.map(function (level) {
    return loadLevel(xxxxxxxxxxxxxxxx.concat(level).concat(xxxxxxxxxxxxxxxx))
})

function loadLevel(ascii) {
    var lowerPlatforms = [], upperPlatforms = []
    var i, j

    function canHazPlatform(platforms) {
        if (platforms.kurwa) {
            var b = platforms.pop()
            platforms.push([i, j, b[2] + 1])
        }
        else {
            platforms.push([i, j, 1])
            platforms.kurwa = true
        }
    }

    for (j = 9; j--;) {
        lowerPlatforms.kurwa = false
        upperPlatforms.kurwa = false

        for (i = 16; i--;) {
            if (ascii[j][i] == 'x') {
                /* lowerPlatforms */
                if (j != 8 && ascii[j + 1][i] != 'x') {
                    canHazPlatform(lowerPlatforms)
                }
                else {
                    lowerPlatforms.kurwa = false
                }
                /* upperPlatforms */
                if (j != 0 && ascii[j - 1][i] != 'x') {
                    canHazPlatform(upperPlatforms)
                }
                else {
                    upperPlatforms.kurwa = false
                }
            }
            else {
                lowerPlatforms.kurwa = false
                upperPlatforms.kurwa = false
            }
        }
    }


    var platforms = []

    for (i = lowerPlatforms.length; i--;) {
        platforms.push(toCoordinates(lowerPlatforms[i], 1))
    }

    for (i = upperPlatforms.length; i--;) {
        platforms.push(toCoordinates(upperPlatforms[i]))
    }

    platforms.sort(function (a, b) {
        return b.y - a.y
    })


    lowerPlatforms = [], upperPlatforms = []

    for (i = 16; i--;) {
        lowerPlatforms.kurwa = false
        upperPlatforms.kurwa = false

        for (j = 9; j--;) {
            if (ascii[j][i] == 'x') {
                /* lowerPlatforms */
                if (i != 15 && ascii[j][i + 1] != 'x') {
                    canHazPlatform(lowerPlatforms)
                }
                else {
                    lowerPlatforms.kurwa = false
                }
                /* upperPlatforms */
                if (i != 0 && ascii[j][i - 1] != 'x') {
                    canHazPlatform(upperPlatforms)
                }
                else {
                    upperPlatforms.kurwa = false
                }
            }
            else {
                lowerPlatforms.kurwa = false
                upperPlatforms.kurwa = false
            }
        }
    }


    var walls = []

    for (i = lowerPlatforms.length; i--;) {
        walls.push(toCoordinates2(lowerPlatforms[i], 1))
    }

    for (i = upperPlatforms.length; i--;) {
        walls.push(toCoordinates2(upperPlatforms[i]))
    }

    walls.sort(function (a, b) {
        return b.y - a.y
    })


    var spikes = []

    for (j = 9; j--;) {
        spikes.kurwa = false

        for (i = 16; i--;) {
            if (ascii[j][i] == '^') {
                canHazPlatform(spikes)
            }
            else {
                spikes.kurwa = false
            }
        }
    }

    spikes = spikes.map(function (b) {
        return {
            x: cellsize * b[0],
            y: cellsize * b[1],
            width: cellsize * b[2],
            height: cellsize
        }
    })

    return {a: ascii, p: platforms, w: walls, s: spikes}
}

function toCoordinates(b, inc) {
    var a = cellsize * (b[1] + (0|inc))

    return [
        {x: cellsize * b[0], y: a},
        {x: cellsize * (b[0] + b[2]), y: a}
    ]
}

function toCoordinates2(b, inc) {
    var a = cellsize * (b[0] + (0|inc))

    return [
        {x: a, y: cellsize * b[1]},
        {x: a, y: cellsize * (b[1] + b[2])}
    ]
}
