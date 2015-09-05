var $ = document.getElementById.bind(document)

function sizeCSS(x, property, value) {
    x.style[property] = value + 'px'
}

var cwidth = 960, cheight = 540, aspect = 16 / 9
var asciizoom, asciizoomx = 1, asciizoomy = 1
var asciileft = 0, asciitop = 0, asciireversed = false


var $a = $('a'), $c = $('c'), $p = $('p')

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

    /* ascii */
    sizeCSS($p, 'left', 0.5 * (innerWidth - w))
    sizeCSS($p, 'top', 0.5 * (innerHeight - h))

    asciizoom = w / cwidth
    asciiUpdate()
}

function asciiUpdate() {
    $p.style.transform = 'scale('
    + asciizoom + ')translate('
    + asciileft + 'px,'
    + (asciireversed? asciitop + 90: asciitop) + 'px)scale('
    + asciizoomx + ','
    + (asciireversed? -asciizoomy: asciizoomy) + ')'
}


handleResize()
addEventListener('resize', handleResize)
addEventListener('orientationchange', handleResize)
