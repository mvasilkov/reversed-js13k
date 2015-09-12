var snd = ['square',0.0000,0.4000,0.0000,0.3860,0.0000,0.2140,20.0000,401.0000,2400.0000,0.4620,0.0000,0.0000,0.0100,0.0003,0.0000,0.0000,0.0000,0.1985,0.0000,0.0000,0.0000,0.0000,1.0000,0.0000,0.0000,0.0000,0.0000]
var context = new AudioContext
var lineOut = new WebAudiox.LineOut(context)
lineOut.volume = 0.1

var buffer = WebAudiox.getBufferFromJsfx(context, snd)
var source = context.createBufferSource()
source.buffer = buffer
source.connect(lineOut.destination)
source.start(0)
