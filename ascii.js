var badChars = '▄▀█░'

var compatibleChars = {
    '▄': 'n',
    '▀': '*',
    '█': 'Ш',
    '░': '/'
}

function getCharWidth(c) {
    var $t = document.createElement('span')

    $t.appendChild(document.createTextNode(c))
    $t.className = 't'
    $p.appendChild($t)

    var x = $t.offsetWidth

    $p.removeChild($t)

    return x
}

var goodCharWidth = getCharWidth('x')
var haveRenderingProblems = false

for (var bci = badChars.length; bci--;) {
    if (getCharWidth(badChars[bci]) != goodCharWidth) {
        haveRenderingProblems = true
        break
    }
}

var charAnimation = charMovingParts.map(function (a) {
    return (charStaticPart + a).replace(/./g, function (c) {
        return (haveRenderingProblems && compatibleChars[c])? compatibleChars[c]: c
    })
})


var $character = document.createElement('p')
var css = ''

charAnimation.forEach(function (a, n) {
    var $b = document.createElement('span')

    $b.className = 'b b' + n
    $b.appendChild(document.createTextNode(charAnimation[n]))
    $character.appendChild($b)

    css += 'p.a' + n + ' .b' + n + '{display:block}'
})

var style = document.createElement('style')
style.appendChild(document.createTextNode(css))
document.head.appendChild(style)

$character.className = 'a5'
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
