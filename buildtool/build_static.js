#!/usr/bin/env node
var levels = require('../levels')
var parts = require('../parts')

levels = levels.levels.map(function (level) {
    return level.map(function (a) {
        return a.replace(/ *$/, '')
    })
})

console.log('var levels =', JSON.stringify(levels))

console.log('var charStaticPart =', JSON.stringify(parts.charStaticPart))
console.log('var charMovingParts =', JSON.stringify(parts.charMovingParts))
