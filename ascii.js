var charAnimation = charMovingParts.map(function (a) {
    if (a.indexOf('\n') == -1)
        a += '\n            '
    return charStaticPart + a
})

var frame = 0
var character = document.createElement('p')
var charTextNode = document.createTextNode(charAnimation[frame])

character.className = 'a' + frame
character.appendChild(charTextNode)
p.appendChild(character)


var playerwidth = 82, playerheight = 103

asciizoomx = playerwidth / character.clientWidth
asciizoomy = playerheight / character.clientHeight
asciileft = 0.5 * (cwidth - playerwidth)
asciitop = 0.5 * (cheight - playerheight)
handleResize()


setInterval(function () {
    if (++frame == charAnimation.length)
        frame = 0
    character.className = 'a' + frame
    charTextNode.nodeValue = charAnimation[frame]
}, 50)
