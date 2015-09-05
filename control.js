function flipGravity() {
    character.g = -character.g
    asciireversed = !asciireversed
}

function handleSpacebar(event) {
    if (event.which == 32 || event.keyCode == 32) {
        event.preventDefault()
        flipGravity()
    }
}

document.body.addEventListener('keypress', handleSpacebar)
