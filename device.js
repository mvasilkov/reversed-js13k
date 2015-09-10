/* Android */
if (navigator.userAgent.match(/Android/i)) {
    document.body.className += ' and'
}

/* CSS pointer-events support */
var testElement = document.createElement('p')
testElement.style.cssText = 'pointer-events:auto'
if (testElement.style.pointerEvents != 'auto')
    document.body.className += ' nop'
testElement = undefined
