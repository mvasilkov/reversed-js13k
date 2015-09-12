var isMobile = false

/* Android */
if (navigator.userAgent.match(/Android/i)) {
    document.body.className += ' and'
    isMobile = true
}

if (navigator.userAgent.match(/iPhone|iPad/i)) {
    isMobile = true
}

/* CSS pointer-events support */
var testElement = document.createElement('p')
testElement.style.cssText = 'pointer-events:auto'
if (testElement.style.pointerEvents != 'auto')
    document.body.className += ' nop'
testElement = undefined
