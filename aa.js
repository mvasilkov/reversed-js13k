/** @constructor */
function ArcadeAudio() {
    this.sounds = {}
}

ArcadeAudio.prototype.add = function(key, count, settings) {
    var i
    this.sounds[key] = []
    settings.forEach(function(elem, index) {
        this.sounds[key].push({
            tick: 0,
            count: count,
            pool: []
        })
        for (i = 0; i < count; ++i) {
            var audio = new Audio
            audio.src = window['jsfxr'](elem)
            this.sounds[key][index].pool.push(audio)
        }
    }, this)
}

ArcadeAudio.prototype.play = function(key) {
    var sound = this.sounds[key]
    if (!sound)
        return

    var soundData = sound.length > 1 ? sound[0|Math.random() * sound.length] : sound[0]
    soundData.pool[soundData.tick].play()
    soundData.tick < soundData.count - 1 ? soundData.tick++ : soundData.tick = 0
}

var aa = new ArcadeAudio()

aa.add('bip', 1, [
    [1,,0.1241,,0.1855,0.5336,,,,,,,,,,,,,1,,,0.1,,0.64]
])

aa.add('jmp', 10, [
    [1,,0.2228,,0.2862,0.4227,,0.2045,,0.422,0.0985,,,,,,,,1,,,,,0.64]
])

if (!isMobile) {
    if (!isFirefox)
    aa.add('lnd', 10, [
        [1,,0.2548,,0.1007,0.7539,0.0996,-0.5302,,,,,,0.7769,-0.4436,,,,1,,,,,0.5]
    ])

    aa.add('lvl', 2, [
        [0,,0.0109,0.5872,0.456,0.4171,,,,,,0.5438,0.5084,,,,,,1,,,,,0.64]
    ])

    aa.add('die', 4, [
        [1,0.0013,0.3576,0.0681,0.8007,0.5117,,-0.3453,0.0049,0.148,-0.2563,-0.2717,0.2608,,-0.3543,-0.1884,-0.0106,-0.0281,0.9971,-0.6629,-0.7531,0.0097,-0.0086,0.5]
    ])

    aa.add('win', 1, [
        [1,0.0309,0.5597,0.0464,0.7472,0.369,,-0.1366,,-0.3111,,-0.1581,-0.8665,,-0.0414,0.2802,0.0258,-0.1198,0.9955,0.1759,,,-0.0005,0.64]
    ])
}
