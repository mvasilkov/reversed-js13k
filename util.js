var $ = document.getElementById.bind(document)

function sizeCSS(x, property, value) {
    x.style[property] = value + 'px'
}

var cwidth = 960, cheight = 540, aspect = 16 / 9


var $a = $('a'), $c = $('c')

$c.width = cwidth
$c.height = cheight


function handleResize() {
    var w = innerWidth, h = innerHeight

    if (w / h > aspect)
        w = h * aspect
    else
        h = w / aspect

    sizeCSS($a, 'width', w)
    sizeCSS($a, 'height', h)
    sizeCSS($c, 'left', -0.5 * w)
    sizeCSS($c, 'top', -0.5 * h)
}


handleResize()
addEventListener('resize', handleResize)
addEventListener('orientationchange', handleResize)
