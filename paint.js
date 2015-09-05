var canvas = $c.getContext('2d')

function paintLevel(level) {
    var i, j

    canvas.beginPath()

    for (i = 16; i--;) {
        for (j = 9; j--;) {
            if (level.a[j][i] == 'x') {
                canvas.rect(cellsize * i, cellsize * j, cellsize, cellsize)
            }
        }
    }

    canvas.fillStyle = '#586E75'
    canvas.fill()

    canvas.fillStyle = '#FFFBEB'
    paintPattern()


    canvas.beginPath()

    for (i = 16; i--;) {
        for (j = 9; j--;) {
            if (level.a[j][i] == '^') {
                canvas.moveTo(cellsize * i, cellsize * (j + 1))
                canvas.lineTo(cellsize * (i + 0.25), cellsize * j)
                canvas.lineTo(cellsize * (i + 0.5), cellsize * (j + 1))
                canvas.lineTo(cellsize * (i + 0.75), cellsize * j)
                canvas.lineTo(cellsize * (i + 1), cellsize * (j + 1))
            }
        }
    }

    canvas.fillStyle = '#F82406'
    canvas.fill()


    canvas.beginPath()

    level.p.concat(level.w)
    .forEach(function (platform) {
        canvas.moveTo(platform[0].x, platform[0].y)
        canvas.lineTo(platform[1].x, platform[1].y)
    })

    canvas.lineCap = 'square'
    canvas.lineWidth = 2
    canvas.strokeStyle = '#EEFF41'
    canvas.stroke()
}

function paintPattern() {
    var step = 20, pad = 10
    var thickness = 2, inc = 0.000626
    var a = Math.random() < 0.5? -0.1: 0.1
    var i, j

    if (Math.random() < 0.5) {
        thickness = 4
        inc = -inc
    }

    canvas.save()

    canvas.translate(0.5 * cwidth, 0.5 * cheight)
    canvas.rotate(Math.random() < 0.5? 0.5 * a: a)
    canvas.translate(-0.5 * cwidth, -0.5 * cheight)

    canvas.globalCompositeOperation = 'source-atop'

    for (i = -pad; i < cwidth / step + pad; ++i) {
        for (j = -pad; j < cheight / step + pad; ++j) {
            canvas.beginPath()
            canvas.arc((i + 0.5) * step, (j + 0.5) * step, thickness += inc, 0, 2 * Math.PI)
            canvas.fill()
        }
    }

    canvas.restore()
}


paintLevel(levels[0])
