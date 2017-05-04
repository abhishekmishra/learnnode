var trumpet = require('trumpet');
var through2 = require('through2');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

stream.pipe(through2(function(buffer, enc, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(process.stdout);
stream.end();

tr.pipe(process.stdout);

process.stdin.pipe(tr);

// stream.pipe(through2(function(buffer, enc, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// })).pipe(process.stdout);