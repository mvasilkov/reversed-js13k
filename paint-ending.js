function paintEnding() {
    canvas.save()
    canvas.translate(706, 314)

    paintCompanionCube(canvas)

    canvas.restore()

    drawBubble(380, 100, 360, 200, 40, 700, 330)

    canvas.fillStyle = '#101010'
    canvas.font = "40px 'Segoe UI','Helvetica Neue',sans-serif"
    canvas.textAlign = 'center'
    canvas.fillText('You\'ve beat the game,', 560, 150, 320)
    canvas.fillText('ASCII person.', 560, 192, 320)
    canvas.fillText('But your princess is', 560, 234, 320)
    canvas.fillText('in another castle.', 560, 276, 320)
}

function drawBubble(x, y, w, h, radius, px, py) {
    var r = x + w
    var b = y + h

    var con1 = Math.min(Math.max(x + radius, px - 10), r - radius - 20)
    var con2 = Math.min(Math.max(x + radius + 20, px + 10), r - radius)

    canvas.beginPath()
    canvas.moveTo(x + radius, y)
    canvas.lineTo(r - radius, y)
    canvas.quadraticCurveTo(r, y, r, y + radius)
    canvas.lineTo(r, b - radius)
    canvas.quadraticCurveTo(r, b, r - radius, b)

    canvas.lineTo(con2, b)
    canvas.lineTo(px, py)
    canvas.lineTo(con1, b)
    canvas.lineTo(x + radius, b)

    canvas.quadraticCurveTo(x, b, x, b - radius)
    canvas.lineTo(x, y + radius)
    canvas.quadraticCurveTo(x, y, x + radius, y)

    canvas.fillStyle = 'rgba(229,221,220,0.6)'
    canvas.fill()

    canvas.lineWidth = 2
    canvas.strokeStyle = '#fff'
    canvas.stroke()
}
