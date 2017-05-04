var through2 = require('through2');
var split = require('split');

var lower = true;
process.stdin.pipe(split()).pipe(through2(function(line, encoding, next) {
    if(lower) {
        this.push(line.toString().toLowerCase() + '\n');
    } else {
        this.push(line.toString().toUpperCase() + '\n');
    }
    lower = !lower;
    next();
})).pipe(process.stdout);