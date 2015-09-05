function flipGravity() {
    character.g = -character.g
    asciireversed = !asciireversed
}

function handleSpacebar(event) {
    if (event.keyCode != 32)
        return
    event.preventDefault()
    flipGravity()
}

document.body.addEventListener('keypress', handleSpacebar)
