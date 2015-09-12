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
    //if (!opt['snd']) return
    var sound = this.sounds[key]
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

aa.add('lvl', 2, [
    [0,,0.0109,0.5872,0.456,0.4171,,,,,,0.5438,0.5084,,,,,,1,,,,,0.64]
])

aa.add('die', 4, [
    [0,0.0002,0.1624,0.0376,0.8672,0.5042,,-0.0836,0.0925,0.1216,0.9048,-0.2467,0.5631,0.7993,-0.0049,-0.7453,-0.0034,0.0724,0.6975,-0.896,0.9713,0.0159,0.0007,0.64]
])

aa.add('win', 1, [
    [1,0.0309,0.5597,0.0464,0.7472,0.369,,-0.1366,,-0.3111,,-0.1581,-0.8665,,-0.0414,0.2802,0.0258,-0.1198,0.9955,0.1759,,,-0.0005,0.64]
])
