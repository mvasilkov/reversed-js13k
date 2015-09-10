var badChars = '▄▀█░'

function getCharWidth(c) {
    var $t = document.createElement('span')

    $t.appendChild(document.createTextNode(c))
    $t.className = 't'
    $p.appendChild($t)

    var x = $t.offsetWidth

    $p.removeChild($t)

    return x
}

var charWidthCache = {}
for (var bci = badChars.length; bci--;) {
    var bc = badChars[bci]
    charWidthCache[bc] = getCharWidth(bc)
}

var goodCharWidth = getCharWidth('x')
var css = '.let{display:inline-block;width:' + goodCharWidth + 'px}'

var charAnimation = charMovingParts.map(function (a) {
    return (charStaticPart + a).replace(/./g, function (c) {
        if (c in charWidthCache && charWidthCache[c] != goodCharWidth)
            return '<span class=let>' + c + '</span>'
        return c
    })
})


var $character = document.createElement('p')

charAnimation.forEach(function (a, n) {
    var $b = document.createElement('span')

    $b.className = 'b b' + n
    $b.innerHTML = charAnimation[n]
    $character.appendChild($b)

    css += 'p.a' + n + ' .b' + n + '{display:block}'
})

var style = document.createElement('style')
style.appendChild(document.createTextNode(css))
document.head.appendChild(style)

$character.className = 'a' + 0
$p.appendChild($character)


var playerwidth = 92, playerheight = 90

asciizoomx = playerwidth / $character.clientWidth
asciizoomy = playerheight / $character.clientHeight
asciileft = 0.5 * (cwidth - playerwidth)
asciitop = 0.5 * (cheight - playerheight)
handleResize()


function charAnimate(frame) {
    $character.className = 'a' + frame
}
