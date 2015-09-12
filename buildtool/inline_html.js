#!/usr/bin/env node
var fs = require('fs')
var html = fs.readFileSync('build/index.inline.html', {encoding: 'utf8'})
html = html.replace(/(<script.*?><\/script>){2,}/,
                    '<script src=./a.js></script><script src=./app.js></script>')
html = html.replace(/(<link rel=stylesheet.*?>){2,}/, '<link rel=stylesheet href=./app.css>')
console.log(html)
