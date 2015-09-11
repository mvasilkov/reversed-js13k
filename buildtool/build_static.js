#!/usr/bin/env node
var levels = require('../levels')
var parts = require('../parts')

levels.levels = levels.levels.map(function (level) {
    return level.map(function (a) {
        return a.replace(/ *$/, '')
    })
})

console.log('var levels =', JSON.stringify(levels.levels))
console.log('/** @const */ var levelNames =', JSON.stringify(levels.levelNames))
console.log('/** @const */ var tutorials =', JSON.stringify(levels.tutorials))

console.log('/** @const */ var charStaticPart =', JSON.stringify(parts.charStaticPart))
console.log('/** @const */ var charMovingParts =', JSON.stringify(parts.charMovingParts))
