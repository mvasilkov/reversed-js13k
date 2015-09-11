var levels = []
var levelNames = []

/* Title screen */
levelNames.push('')
/* Level is 16 x 9, but lines 0 and 8 are the same across all levels */
levels.push([
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '       xx       ',
    '                '
])

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


/* Export to build */
if (typeof module != 'undefined' && module.exports) {
    exports.levels = levels
    exports.levelNames = levelNames
}
