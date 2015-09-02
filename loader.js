var xxxxxxxxxxxxxxxx = 'xxxxxxxxxxxxxxxx'

levels = levels.map(function (level) {
    level.unshift(xxxxxxxxxxxxxxxx)
    level.push(xxxxxxxxxxxxxxxx)
    return loadLevel(level)
})

function loadLevel(level) {
    var lowerPlatforms = [], upperPlatforms = []
    var i, j

    for (j = 9; j--;) {
        lowerPlatforms.kurwa = false
        upperPlatforms.kurwa = false

        for (i = 16; i--;) {
            if (level[j][i] == 'x') {
                /* lowerPlatforms */
                if (j != 8 && level[j + 1][i] != 'x') {
                    if (lowerPlatforms.kurwa) {
                        var b = lowerPlatforms.pop()
                        lowerPlatforms.push([i, j, b[2] + 1])
                    }
                    else {
                        lowerPlatforms.push([i, j, 1])
                        lowerPlatforms.kurwa = true
                    }
                }
                else {
                    lowerPlatforms.kurwa = false
                }
                /* upperPlatforms */
                if (j != 0 && level[j - 1][i] != 'x') {
                    if (upperPlatforms.kurwa) {
                        var b = upperPlatforms.pop()
                        upperPlatforms.push([i, j, b[2] + 1])
                    }
                    else {
                        upperPlatforms.push([i, j, 1])
                        upperPlatforms.kurwa = true
                    }
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

    return platforms
}

function toCoordinates(b, inc) {
    var cellsize = 60
    var altitude = cellsize * (b[1] + (0|inc))

    return [
        {x: cellsize * b[0], y: altitude},
        {x: cellsize * (b[0] + b[2]), y: altitude}
    ]
}
