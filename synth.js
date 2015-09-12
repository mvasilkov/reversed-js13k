/* Piano synth by Iñigo Quílez (http://iquilezles.org/) */
function synth(w, t) {
    t += .00015 * noise(12 * t)

    var rt = t

    var r = t * w * .2
    r = r % 1
    var a = 0.15 + 0.6 * (rt)
    var b = 0.65 - 0.5 * (rt)
    var y = 50 * r * (r - 1) * (r - .2) * (r - a) * (r - b)

    r = t * w * .401
    r = r % 1
    a = 0.12 + 0.65 * (rt)
    b = 0.67 - 0.55 * (rt)
    var y2 = 50 * r * (r - 1) * (r - .4) * (r - a) * (r - b)
    r = t * w * .399
    r = r % 1
    a = 0.14 + 0.55 * (rt)
    b = 0.66 - 0.65 * (rt)
    var y3 = 50 * r * (r - 1) * (r - .8) * (r - a) * (r - b)

    y += .02 * noise(1000 * t)

    y /= (t * w * .0015 + .1)
    y2 /= (t * w * .0020 + .1)
    y3 /= (t * w * .0025 + .1)

    return (y + y2 + y3) / 3
}

function grad(n, x) {
    n = (n << 13) ^ n
    n = (n * (n * n * 15731 + 789221) + 1376312589)
    var res = x
    if (n & 0x20000000)
        res = -x
    return res
}

function noise(x) {
    var i = Math.floor(x)
    var f = x - i
    var w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0)
    var a = grad(i + 0, f + 0.0)
    var b = grad(i + 1, f - 1.0)
    return a + (b - a) * w
}
