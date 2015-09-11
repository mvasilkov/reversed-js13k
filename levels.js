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

levelNames.push('Go precisely')
levels.push([
    '      vvxxvv    ',
    '        xx      ',
    '                ',
    '                ',
    '                ',
    '                ',
    '        ^^      '
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
