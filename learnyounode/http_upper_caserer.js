const http = require('http');
const map = require('through2-map')

if (process.argv.length > 2) {
    var port = process.argv[2];

    var httpServer = http.createServer(function (request, response) {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    });

    httpServer.listen(port);
}