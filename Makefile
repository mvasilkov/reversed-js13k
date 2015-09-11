cc:=java -jar $$(npm config get prefix)/lib/node_modules/google-closure-compiler/compiler.jar
cc_opt:=--charset UTF-8 --compilation_level ADVANCED --language_in ECMASCRIPT5 \
    --language_out ECMASCRIPT5_STRICT --third_party --warning_level VERBOSE

build/static.js: levels.js parts.js
	mkdir -p build
	buildtool/build_static.js > $@

closure: device.js polyfill.js util.js build/static.js ascii.js companion-cube.js \
    loader.js palette.js paint-back.js paint.js paint-ending.js collide.js main.js control.js
	$(cc) $(cc_opt) $^ > build/closure.js

.PHONY: closure
