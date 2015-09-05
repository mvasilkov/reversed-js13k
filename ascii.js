var charAnimation = charMovingParts.map(function (a) {
    return charStaticPart + a
})

var $character = document.createElement('p')
var charTextNode = document.createTextNode(charAnimation[0])

$character.className = 'a' + 0
$character.appendChild(charTextNode)
$p.appendChild($character)


var playerwidth = 92, playerheight = 90

asciizoomx = playerwidth / $character.clientWidth
asciizoomy = playerheight / $character.clientHeight
asciileft = 0.5 * (cwidth - playerwidth)
asciitop = 0.5 * (cheight - playerheight)
handleResize()


function charAnimate(frame) {
    $character.className = 'a' + frame
    charTextNode.nodeValue = charAnimation[frame]
}
