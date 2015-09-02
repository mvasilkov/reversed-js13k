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


    canvas.beginPath()

    level.p.concat(level.w)
    .forEach(function (platform) {
        canvas.moveTo(platform[0].x, platform[0].y)
        canvas.lineTo(platform[1].x, platform[1].y)
    })

    canvas.lineWidth = 2
    canvas.strokeStyle = '#EEFF41'
    canvas.stroke()
}


paintLevel(levels[0])
