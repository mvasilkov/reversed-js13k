var bgcanvas = $b.getContext('2d')

var stars1 = prepareStars(3)
var stars2 = prepareStars(6)
var stars3 = prepareStars(9)

function rnd(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min
}

function prepareStars(size) {
    var stars = []

    for (var i = 10 * (12 - size); i--;) {
        stars.push({
            x: rnd(0, cwidth - size),
            y: rnd(cellsize, cheight - cellsize - size)
        })
    }

    return stars
}

function paintBackdrop(direction) {
    bgcanvas.clearRect(0, 0, cwidth, cheight)

    drawStars(stars1, 3, '#5B8094', direction)
    drawStars(stars2, 6, '#719CB9', 2 * direction)
    drawStars(stars3, 9, '#85B3C5', 3 * direction)
}

function drawStars(stars, size, color, offset) {
    bgcanvas.beginPath()

    for (var i = 10 * (12 - size); i--;) {
        var s = stars[i]

        s.y -= offset
        if (s.y < cellsize) {
            s.x = rnd(0, cwidth - size)
            s.y += cheight
        }
        else if (s.y > cheight - cellsize) {
            s.x = rnd(0, cwidth - size)
            s.y -= cheight
        }

        bgcanvas.rect(s.x, s.y, size, size)
    }

    bgcanvas.fillStyle = color
    bgcanvas.fill()
}
