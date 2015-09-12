cc:=java -jar $$(npm config get prefix)/lib/node_modules/google-closure-compiler/compiler.jar
cc_opt:=--charset UTF-8 --compilation_level ADVANCED --language_in ECMASCRIPT5 \
    --language_out ECMASCRIPT5_STRICT --third_party --warning_level VERBOSE

app: closure html css
	rm build/{index.inline.html,static.js}

build/static.js: levels.js parts.js
	mkdir -p build
	buildtool/build_static.js > $@

closure: device.js polyfill.js util.js build/static.js ascii.js companion-cube.js \
    loader.js palette.js paint-back.js paint.js paint-ending.js collide.js main.js control.js
	$(cc) $(cc_opt) $^ > build/app.js

build/index.inline.html: index.html
	html-minifier --collapse-whitespace --remove-attribute-quotes index.html > $@

html: build/index.inline.html
	buildtool/inline_html.js > build/index.html

css: util.css ascii.css title.css
	cleancss --output build/app.css $^

audiotest: audiotestclosure

audiotestclosure: lib/webaudiox.shim.js lib/webaudiox.lineout.js lib/webaudiox.loadbuffer.js \
    lib/webaudiox.bytetonormalizedfloat32array.js lib/webaudiox.jsfx.js lib/audio.js \
    lib/jsfx.js lib/jsfxlib.js audio-test.js
	$(cc) $(cc_opt) $^ > build/audiotest.js

.PHONY: app closure html css audiotest audiotestclosure
