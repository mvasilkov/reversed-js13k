function flipGravity() {
    aa.play('jmp')
    character.g = -character.g
    asciireversed = !asciireversed
}

function handleSpacebar(event) {
    if (event.which == 32 || event.keyCode == 32) {
        handleTouch(event)
    }
}

function handleTouch(event) {
    event.preventDefault()
    flipGravity()
}

document.body.addEventListener('keyup', handleSpacebar)
$i.addEventListener('click', handleTouch)
$i.addEventListener('touchstart', handleTouch)
