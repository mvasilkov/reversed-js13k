/* x: block
 * b: block pattern
 * p: platforms
 */
var palettes = [
    {
        x: '#FFF691',
        b: '#F7CA77',
        p: '#F602FD'
    },
    {
        x: '#04FEFE',
        b: '#04C0FB',
        p: '#E1FF5F'
    },
    {
        x: '#FF96F2',
        b: '#FD2AA1',
        p: '#F6FE48'
    },
    {
        x: '#27DE78',
        b: '#60FD93',
        p: '#FE035D'
    },
]

var currentPalette = 0
var pal = palettes[currentPalette]

function nextPalette() {
    if (++currentPalette == palettes.length)
        currentPalette = 0
    pal = palettes[currentPalette]
}
