# Reversed
**Reversed**: a varying-gravitational platforming puzzle, written for js13kGames–2015

## Compatibility

Browser support is actually pretty decent: the game should work in any modern browser, even Internet Explorer (≥ 10).

For best results, however, it's advised to use either Firefox or Chrome.

On mobile, both Safari (iOS) and Chrome (Android) are supported. Safari is much better.

ASCII art is problematic on Android. While not game-breaking, it's implemented differently and looks slightly worse.

The game is better suited for landscape mode.

### Sound

Mobile browsers typically won't make any sound, unless triggered by an explicit user action (tap).
This means that most of the in-game events will be inaudible on mobile, jumping being notable exception.

Internet Explorer is completely silent, as it doesn't support WAVE PCM audio.

## Build

    npm i -g google-closure-compiler html-minifier clean-css
    make

## Kudos

Sound effects [synthesizer code][1] (in `build/a.js`) by **Markus Neubrand** (Apache License 2.0)

[1]: https://github.com/mneubrand/jsfxr
