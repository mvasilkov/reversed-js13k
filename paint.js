var canvas = $c.getContext('2d')

function setFontSize(n) {
    canvas.font = n + "px 'Segoe UI','Helvetica Neue',sans-serif"
}

canvas.textAlign = 'center'

function paintLevel(n) {
    var i, j
    var level = levels[n]

    canvas.clearRect(0, 0, cwidth, cheight)
    canvas.beginPath()

    for (i = 16; i--;) {
        for (j = 9; j--;) {
            if (level.a[j][i] == 'x') {
                canvas.rect(cellsize * i, cellsize * j, cellsize, cellsize)
            }
        }
    }

    canvas.fillStyle = pal.x
    canvas.fill()

    canvas.fillStyle = canvas.strokeStyle = pal.b
    n % 2? paintDotPattern(): paintStripePattern()


    canvas.beginPath()

    for (i = 16; i--;) {
        for (j = 9; j--;) {
            if (level.a[j][i] == '^') {
                paintSpikes(i, j, 0)
            }
            else if (level.a[j][i] == 'v') {
                paintSpikes(i, j, 1)
            }
            else if (level.a[j][i] == '<') {
                paintSpikes2(i, j, 0)
            }
            else if (level.a[j][i] == '>') {
                paintSpikes2(i, j, 1)
            }
        }
    }

    canvas.fillStyle = '#FEFDFB'
    canvas.fill()

    /* blood */

    canvas.save()

    canvas.beginPath()

    for (i = 16; i--;) {
        for (j = 9; j--;) {
            if (level.a[j][i] == '^') {
                canvas.rect(cellsize * i, cellsize * j, cellsize, 0.5 * cellsize)
            }
            else if (level.a[j][i] == 'v') {
                canvas.rect(cellsize * i, cellsize * (j + 0.5), cellsize, 0.5 * cellsize)
            }
            else if (level.a[j][i] == '<') {
                canvas.rect(cellsize * i, cellsize * j, 0.5 * cellsize, cellsize)
            }
            else if (level.a[j][i] == '>') {
                canvas.rect(cellsize * (i + 0.5), cellsize * j, 0.5 * cellsize, cellsize)
            }
        }
    }

    canvas.globalCompositeOperation = 'source-atop'
    canvas.fillStyle = '#FE0302'
    canvas.fill()

    canvas.restore()


    canvas.beginPath()

    level.p.concat(level.w)
    .forEach(function (platform) {
        canvas.moveTo(platform[0].x, platform[0].y)
        canvas.lineTo(platform[1].x, platform[1].y)
    })

    canvas.lineCap = 'square'
    canvas.lineWidth = 2
    canvas.strokeStyle = pal.p
    canvas.stroke()

    /* level name */

    if (levelNames[n]) {
        setFontSize(25)
        var levelName = levelNames[n] // ' (Level ' + n + ' of ' + (levels.length - 1) + ')'
        var levelNameWidth = canvas.measureText(levelName).width
        var levelNamePadding = 0.5 * (cwidth - levelNameWidth)
        /** @const */ var levelNameTop = 496
        /** @const */ var levelNameMiddle = 512
        /** @const */ var levelNameBottom = 528
        /** @const */ var levelNameCap = 16

        canvas.beginPath()

        canvas.moveTo(levelNamePadding, levelNameTop)
        canvas.lineTo(cwidth - levelNamePadding, levelNameTop)
        canvas.quadraticCurveTo(cwidth - levelNamePadding + levelNameCap, levelNameTop,
                                cwidth - levelNamePadding + levelNameCap, levelNameMiddle)
        canvas.quadraticCurveTo(cwidth - levelNamePadding + levelNameCap, levelNameBottom,
                                cwidth - levelNamePadding, levelNameBottom)
        canvas.lineTo(levelNamePadding, levelNameBottom)
        canvas.quadraticCurveTo(levelNamePadding - levelNameCap, levelNameBottom,
                                levelNamePadding - levelNameCap, levelNameMiddle)
        canvas.quadraticCurveTo(levelNamePadding - levelNameCap, levelNameTop,
                                levelNamePadding, levelNameTop)

        canvas.fillStyle = 'rgba(0,0,0,0.5)'
        canvas.fill()

        canvas.fillStyle = '#fff'
        canvas.fillText(levelName, 0.5 * cwidth, 521, 900)
    }
}

// TODO test whether (i += 0.25) results in a smaller zipball
function paintSpikes(i, j, x) {
    canvas.moveTo(cellsize * i, cellsize * (j + (x ^= 1)))
    canvas.lineTo(cellsize * (i + 0.25), cellsize * (j + (x ^= 1)))
    canvas.lineTo(cellsize * (i + 0.5), cellsize * (j + (x ^= 1)))
    canvas.lineTo(cellsize * (i + 0.75), cellsize * (j + (x ^= 1)))
    canvas.lineTo(cellsize * (i + 1), cellsize * (j + (x ^= 1)))
}

function paintSpikes2(i, j, x) {
    canvas.moveTo(cellsize * (i + (x ^= 1)), cellsize * j)
    canvas.lineTo(cellsize * (i + (x ^= 1)), cellsize * (j + 0.25))
    canvas.lineTo(cellsize * (i + (x ^= 1)), cellsize * (j + 0.5))
    canvas.lineTo(cellsize * (i + (x ^= 1)), cellsize * (j + 0.75))
    canvas.lineTo(cellsize * (i + (x ^= 1)), cellsize * (j + 1))
}

function paintDotPattern() {
    var step = 20, pad = 10
    var thickness = 2, inc = 0.000626
    var a = coin()? -0.1: 0.1
    var i, j

    if (coin()) {
        thickness = 4
        inc = -inc
    }

    canvas.save()

    canvas.translate(0.5 * cwidth, 0.5 * cheight)
    canvas.rotate(coin()? 0.5 * a: a)
    canvas.translate(-0.5 * cwidth, -0.5 * cheight)

    canvas.globalCompositeOperation = 'source-atop'

    for (i = -pad; i < cwidth / step + pad; ++i) {
        canvas.beginPath()

        for (j = -pad; j < cheight / step + pad; ++j) {
            canvas.arc((i + 0.5) * step, (j + 0.5) * step, thickness += inc, 0, 2 * Math.PI)
        }

        canvas.fill()
    }

    canvas.restore()
}

function paintStripePattern() {
    var inc = 10 * Math.sqrt(2)
    var i

    canvas.save()

    canvas.translate(0.5 * cwidth, 0.5 * cheight)
    canvas.rotate((coin()? -1: 1) * 0.25 * Math.PI)
    canvas.translate(-0.5 * cwidth + 0.5, -0.5 * cheight + 0.5)

    canvas.globalCompositeOperation = 'source-atop'

    canvas.beginPath()
    for (i = -cwidth; i < 2 * cwidth; i += inc) {
        canvas.moveTo(i, -cheight)
        canvas.lineTo(i, 2 * cheight)
    }
    canvas.lineWidth = 2
    canvas.stroke()

    canvas.restore()
}


paintLevel(0)
