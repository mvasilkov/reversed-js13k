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

//for (var varname in {a: 1, b: 1, c: 1, i: 1, p: 1, s: 1, t: 1}) {
//    window['$' + varname] = $(varname)
//}

var $a = $('a'), $b = $('b'), $c = $('c'), $i = $('i'),
    $p = $('p'), $s = $('s'), $t = $('t')

$b.width = $c.width = cwidth
$b.height = $c.height = cheight


function handleResize() {
    var w = window.innerWidth, h = window.innerHeight
    var left, top

    if (w / h > aspect)
        w = h * aspect
    else
        h = w / aspect

    sizeCSS($a, 'width', w)
    sizeCSS($a, 'height', h)
    sizeCSS($a, 'left', left = 0.5 * (window.innerWidth - w))
    sizeCSS($a, 'top', top = 0.5 * (window.innerHeight - h))

    /* ascii */
    sizeCSS($p, 'left', left)
    sizeCSS($p, 'top', top)

    asciizoom = w / cwidth
    asciiUpdate()

    $s.style[transformProperty] = 'scale('
    + asciizoom + ')translate(600px,240px)'

    $t.style[transformProperty] = 'scale('
    + asciizoom + ')translate(40px,160px)'
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
window.addEventListener('resize', handleResize)
window.addEventListener('orientationchange', handleResize)
