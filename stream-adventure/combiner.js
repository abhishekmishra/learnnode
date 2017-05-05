var combine = require('stream-combiner');
var split = require('split');
var through2 = require('through2');
var zlib = require('zlib');

module.exports = function () {
    var currentGenre = null;
    return combine(
        // read newline-separated json,
        split(),
        // group books into genres,
        through2(function (buffer, enc, next) {
            if (buffer.toString().length > 0) {
                var incoming = JSON.parse(buffer.toString());

                if (incoming.type === 'genre') {
                    if (currentGenre != null) {
                        //console.log(JSON.stringify(currentGenre));
                        this.push(JSON.stringify(currentGenre) + '\n');
                    }
                    console.log('genre is now ' + incoming.name);
                    currentGenre = {};
                    currentGenre.name = incoming.name;
                    currentGenre.books = [];
                } else if (incoming.type === 'book') {
                    currentGenre.books[currentGenre.books.length] = incoming.name;
                }
            } else {
                this.push(JSON.stringify(currentGenre) + '\n');
                currentGenre = null;
            }
            next();
        }),
        // then gzip the output
        zlib.createGzip()
    )
}