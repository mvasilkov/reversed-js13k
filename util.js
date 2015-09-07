function coin() {
    return Math.random() < 0.5
}

var $ = document.getElementById.bind(document)

function sizeCSS(x, property, value) {
    x.style[property] = value + 'px'
}

var cwidth = 960, cheight = 540, aspect = 16 / 9
var asciizoom, asciizoomx = 1, asciizoomy = 1
var asciileft = 0, asciitop = 0, asciireversed = false


var $a = $('a'), $b = $('b'), $c = $('c'), $p = $('p')

$b.width = $c.width = cwidth
$b.height = $c.height = cheight


function handleResize() {
    var w = innerWidth, h = innerHeight
    var left, top

    if (w / h > aspect)
        w = h * aspect
    else
        h = w / aspect

    sizeCSS($a, 'width', w)
    sizeCSS($a, 'height', h)
    sizeCSS($a, 'left', left = 0.5 * (innerWidth - w))
    sizeCSS($a, 'top', top = 0.5 * (innerHeight - h))

    /* ascii */
    sizeCSS($p, 'left', left)
    sizeCSS($p, 'top', top)

    asciizoom = w / cwidth
    asciiUpdate()
}


var transformProperty = 'transform'
if (!(transformProperty in $a.style)) {
    transformProperty = 'webkitTransform'
}

function asciiUpdate() {
    $p.style[transformProperty] = 'scale('
    + asciizoom + ')translate('
    + asciileft + 'px,'
    + (asciireversed? asciitop + 90: asciitop) + 'px)scale('
    + asciizoomx + ','
    + (asciireversed? -asciizoomy: asciizoomy) + ')'
}


handleResize()
addEventListener('resize', handleResize)
addEventListener('orientationchange', handleResize)
