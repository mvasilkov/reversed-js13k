var levels = []
var levelNames = []
var tutorials = []

/* Title screen */
levelNames.push('')
/* Level is 16 x 9, but lines 0 and 8 are the same across all levels */
levels.push([
    '                ',
    '     xxx        ',
    '     x          ',
    '                ',
    '                ',
    '   xx  xx   x   ',
    '   xx   xx xxx  '
])
tutorials.push('')

levelNames.push('One small step for a man')
levels.push([
    '',
    '',
    '',
    '',
    '      xxxx      ',
    '      xxxx      ',
    '      xxxx      '
])
tutorials.push('Click or tap anywhere on the screen to invert gravity')

levelNames.push('Walk softly')
levels.push([
    '           vv   ',
    '',
    '',
    '',
    '',
    '',
    '     ^^         '
])
tutorials.push('Avoid spikes: they kill you to death!')

levelNames.push('Overpass')
levels.push([
    '   vvvvvv       ',
    '',
    '',
    '     xxxxxx     ',
    '',
    '',
    '       ^^^^^^   '
])
tutorials.push('')

levelNames.push('Easy mode')
levels.push([
    '   vvvv    vvvv ',
    '',
    '',
    '',
    '',
    '         xx     ',
    '         xx     '
])
tutorials.push('')

levelNames.push('Jumpy behavior')
levels.push([
    '      vvvv      ',
    '                ',
    '                ',
    '                ',
    '                ',
    '       xx       ',
    '       xx       '
])
tutorials.push('Click or tap in rapid succession while running')

levelNames.push('Tetris all the way down')
levels.push([
    '        vv   vvx',
    '     xxx       x',
    '     x         x',
    '               x',
    '                ',
    '   xx  xx   x   ',
    '   xx^^ xx xxx  '
])
tutorials.push('')

levelNames.push('Timing attack')
levels.push([
    '     vvxxvv     ',
    '       xx       ',
    '                ',
    '                ',
    '                ',
    '                ',
    '       ^^       '
])
tutorials.push('')

levelNames.push('Reason to fly')
levels.push([
    '    vvvvvv      ',
    '                ',
    '                ',
    '                ',
    '      xxxx      ',
    '                ',
    '      ^^^^^^    '
])
tutorials.push('')

levelNames.push('A door into summer')
levels.push([
    '    <x    <x    ',
    '          <x    ',
    '                ',
    '                ',
    '                ',
    '           <x   ',
    '     <x    <x   '
])
tutorials.push('')

levelNames.push('Cowards die in shame')
levels.push([
    '    vvvvxxvvv   ',
    '                ',
    '    ^       ^   ',
    '   <x       x>  ',
    '    v       v   ',
    '        ^^      ',
    '        xx      '
])
//tutorials.push('Cake will be available at the conclusion of this level')
tutorials.push('')

levelNames.push('Written for js13kGames–2015')
levels.push([
    ' (  (( ( ((  (  ',
    '   (   (   ( (  ',
    ' (  (  (  (  ( (',
    ' (   ( (   ( (( ',
    ' ( ((  ( ((  ( (',
    '(               ',
    ''
])
tutorials.push('')

/* Ending level */
levelNames.push('This was a triumph')
levels.push([
    '',
    'xxxxx           ',
    '    x           ',
    '    x           ',
    '    x           ',
    'xxxxx           ',
    ''
])
tutorials.push('Reload the page to start a new game')


/* Export to build */
if (typeof module != 'undefined' && module.exports) {
    exports.levels = levels
    exports.levelNames = levelNames
    exports.tutorials = tutorials
}
