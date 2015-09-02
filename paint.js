var canvas = $c.getContext('2d')

function paintLevel(level) {
    canvas.beginPath()

    level.forEach(function (platform) {
        canvas.moveTo(platform[0].x, platform[0].y)
        canvas.lineTo(platform[1].x, platform[1].y)
    })

    canvas.lineWidth = 2
    canvas.strokeStyle = '#EEFF41'
    canvas.stroke()
}


paintLevel(levels[0])
