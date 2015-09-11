var levels = []

/* 16 x 9, but lines 0 and 8 are the same across all levels */
levels.push([
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '       xx       ',
    '                '
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

levels.push([
    '       xx       ',
    '       vv       ',
    '   ^       ^    ',
    '   x       x    ',
    '   v       v    ',
    '                ',
    '   x^^^xx^^^x   '
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
if (typeof module != 'undefined' && module.exports) {
    exports.levels = levels
}
