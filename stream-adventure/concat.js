var through2 = require('through2');
var concat = require('concat-stream')

process.stdin.pipe(concat(function (buffer) { 
    console.log(buffer.toString().split("").reverse().join("")) ;
}));