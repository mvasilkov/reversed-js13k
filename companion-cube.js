var ccsize = 8
var ccOutline = '#fff'
var ccLight = '#E5DDDC'
var ccDark = '#7C7B7C'
var ccPink = '#F9B6C3'
var ccPink2 = '#F478A0'

function do4(fun) {
    for (var i = 4; i--;) {
        fun()
        canvas.translate(21, 0)
        canvas.rotate(0.5 * Math.PI)
    }
}

function paintCompanionCube(canvas) {
    canvas.scale(ccsize, ccsize)

    canvas.fillStyle = ccOutline
    do4(function () {
        canvas.fillRect(0.5, 0.5, 7, 7)
        canvas.fillRect(8.5, 0.5, 4, 3)
    })
    canvas.fillRect(1.5, 1.5, 18, 18)


    canvas.fillStyle = ccDark
    canvas.fillRect(2, 2, 17, 17)

    canvas.fillStyle = ccPink
    canvas.fillRect(10, 2, 1, 17)
    canvas.fillRect(2, 10, 17, 1)


    canvas.fillStyle = ccLight
    canvas.beginPath()
    do4(function () {
        canvas.rect(1, 1, 6, 3)
        canvas.rect(1, 4, 5, 1)
        canvas.rect(1, 5, 4, 1)
        canvas.rect(1, 6, 3, 1)
        canvas.rect(9, 1, 3, 2)
        canvas.rect(8, 5, 5, 4)
        canvas.rect(13, 6, 1, 2)
        canvas.rect(14, 7, 1, 1)
    })
    canvas.fill()


    canvas.fillStyle = ccPink2
    canvas.beginPath()
    canvas.rect(7, 9, 7, 2)
    canvas.rect(8, 8, 2, 4)
    canvas.rect(11, 8, 2, 4)
    canvas.rect(9, 10, 3, 3)
    canvas.rect(10, 13, 1, 1)
    canvas.fill()
}
