var charStaticPart = ''
+ ' ▄▄▄▄▀▀▀▀▀▄ \n'
+ '█░         █\n'
+ '█░░  >   < █\n'
+ '█░░░`  ^  `█\n'
+ ' ▀█░░    █▀ \n'
+ ' o█░░░   █o \n'

var charMovingParts = [
    '  █▀▀▀▀▀█   ',
    ' ▄█▀▀▀▀▀▀▀▀ ',
    ' ▀▀▀▀▀▀▀▀▀▄ ',
    '   ▀▀▀▀▀▀█  ',
    '  ▀▀█▀▀▀█▀  ',
    '  ▀█▀▀▀█▀   '
]


/* Export to build */
if (typeof module != 'undefined' && module.exports) {
    exports.charStaticPart = charStaticPart
    exports.charMovingParts = charMovingParts
}
