var levels = []

/* 16 x 9, but lines 0 and 8 are the same across all levels */
levels.push([
    '       xx       ',
    '       vv       ',
    '                ',
    '                ',
    '                ',
    '       ^^       ',
    '       xx       ',
])

levels.push([
    '',
    '',
    '',
    '',
    '      xxxx      ',
    '      xxxx      ',
    '      xxxx      '
])

levels.push([
    '           vv   ',
    '',
    '',
    '',
    '',
    '',
    '     ^^         '
])

levels.push([
    '   vvvvvv       ',
    '',
    '',
    '     xxxxxx     ',
    '',
    '',
    '       ^^^^^^   '
])

levels.push([
    '  vvvv     vvvv ',
    '',
    '',
    '',
    '',
    '',
    '        x       '
])

/* Ending level */
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
if (module && module.exports) {
    exports.levels = levels
}
