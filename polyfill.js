if (typeof requestAnimationFrame == 'undefined') {
    ['moz', 'webkit', 'ms'].some(function (p) {
        var fun = this[p + 'RequestAnimationFrame']
        if (typeof fun == 'function') {
            return requestAnimationFrame = fun
        }
    }) || (requestAnimationFrame = function (fun) {
        setTimeout(fun, 16)
    })
}
