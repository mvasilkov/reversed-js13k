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

// TODO optimize (cut branches)
function drawBubble(x, y, w, h, radius, px, py) {
    var r = x + w
    var b = y + h

    var con1, con2
    if (py < y || py > y + h) {
        con1 = Math.min(Math.max(x + radius, px - 10), r - radius - 20)
        con2 = Math.min(Math.max(x + radius + 20, px + 10), r - radius)
    }
    else {
        con1 = Math.min(Math.max(y + radius, py - 10), b - radius - 20)
        con2 = Math.min(Math.max(y + radius + 20, py + 10), b - radius)
    }

    var dir
    if (py < y)
        dir = 2
    if (py > y)
        dir = 3
    if (px < x && py >= y && py <= b)
        dir = 0
    if (px > x && py >= y && py <= b)
        dir = 1
    if (px >= x && px <= r && py >= y && py <= b)
        dir = -1

    canvas.beginPath()
    canvas.moveTo(x + radius, y)
    if (dir == 2) {
        canvas.lineTo(con1, y)
        canvas.lineTo(px, py)
        canvas.lineTo(con2, y)
        canvas.lineTo(r - radius, y)
    }
    else
        canvas.lineTo(r - radius, y)
    canvas.quadraticCurveTo(r, y, r, y + radius)
    if (dir == 1) {
        canvas.lineTo(r, con1)
        canvas.lineTo(px, py)
        canvas.lineTo(r, con2)
        canvas.lineTo(r, b - radius)
    }
    else
        canvas.lineTo(r, b - radius)
    canvas.quadraticCurveTo(r, b, r - radius, b)
    if (dir == 3) {
        canvas.lineTo(con2, b)
        canvas.lineTo(px, py)
        canvas.lineTo(con1, b)
        canvas.lineTo(x + radius, b)
    }
    else
        canvas.lineTo(x + radius, b)
    canvas.quadraticCurveTo(x, b, x, b - radius)
    if (dir == 0) {
        canvas.lineTo(x, con2)
        canvas.lineTo(px, py)
        canvas.lineTo(x, con1)
        canvas.lineTo(x, y + radius)
    }
    else
        canvas.lineTo(x, y + radius)
    canvas.quadraticCurveTo(x, y, x + radius, y)

    canvas.fillStyle = 'rgba(229,221,220,0.6)'
    canvas.fill()

    canvas.lineWidth = 2
    canvas.strokeStyle = '#fff'
    canvas.stroke()
}
