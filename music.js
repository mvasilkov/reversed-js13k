/* This is heavily based on work by Joshua Koo (zz85) */
var noteSamples = []

function generate() {
    var samp
    for (var i = 0; i < 60; ++i) {
        samp = new Float32Array(44100)
        genSample(36 + i, samp)
        noteSamples[i] = samp
    }
}

function genSample(note, outputBuffer) {
    var semitones = note - 69
    var frequency = 440 * Math.pow(2, semitones / 12)
    var wavelength = 2 * Math.PI * frequency
    genBuffer(wavelength, outputBuffer)
}

function genBuffer(wavelength, outputBuffer) {
    for (var i = 0; i < 44100; ++i) {
        outputBuffer[i] = synth(wavelength, i / 44100)
    }
}


var count = 0
var ns = [0, 1, 5, 2, 0, 5, 2, 4]

function playLoop() {
    if (isMobile)
        return

    var note1 = 36, note2, note3
    var k = 16, j

    for (j = 0; j < 3; ++j) {
        note1 += ns[~~(count / k) % 8]
        k *= 0.5
    }

    var n1 = ns[~~(count / k) % 8]
    note2 = note1 + 12 + n1
    note3 = note2 + 12 + ns[count % 8]
    note3 = cleanMaj(note3)
    midiOut(note3)

    if ((count % 2) == 0) {
        note3 = note2
        note2 = cleanMaj(note2)
        midiOut(note2)
        note2 = cleanMaj(note3 + 3)
        if (note2 == 0)
            note2 = cleanMaj(note3 + 4)
        midiOut(note2)
    }

    if ((count % 4) == 0) {
        note1 = cleanMaj(note1)
        midiOut(note1)
    }

    ++count
}

function cleanMaj(note) {
    var n = note % 12
    if (n == 1 || n == 3 || n == 6 || n == 8 || n == 10)
        note = 0
    return note
}

function midiOut(note) {
    if (note)
        play(note - 36)
}


var audioContext
var playbackBuffers = []
var gainNode

function initializeMusic() {
    if (isMobile)
        return

    var AC = window['AudioContext'] || window['webkitAudioContext'] || window['mozAudioContext']
    if (!AC)
        return

    generate()

    audioContext = new AC

    for (var i = 0; i < 8; ++i) {
        playbackBuffers[i] = audioContext.createBuffer(1, 44100, 44100)
    }

    gainNode = audioContext.createGain()
    gainNode.connect(audioContext.destination)
    gainNode.gain.value = 0.3
}


var currentBuffer = 0

function play(k) {
    currentBuffer = ++currentBuffer % 8

    if (k > noteSamples.length || k < 0) {
        return
    }

    var destinationBuffer = playbackBuffers[currentBuffer].getChannelData(0)
    var sourceBuffer = noteSamples[k]
    for (var i = 44100; i--;) {
        destinationBuffer[i] = sourceBuffer[i]
    }

    var node = audioContext.createBufferSource()
    node.buffer = playbackBuffers[currentBuffer]
    node.connect(gainNode)
    node.start(0)
}
