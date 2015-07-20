var fs = require('fs');

var file = fs.readFileSync(process.argv[2], 'utf8');
var lines = file.split("\n");

console.log(lines.length - 1);
