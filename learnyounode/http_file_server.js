const http = require('http');
const fs = require('fs');

if(process.argv.length > 2) {
    var port = process.argv[2];
    var fname = process.argv[3];

    var httpServer = http.createServer(function(request, response) {
        var fstream = fs.createReadStream(fname);
        fstream.pipe(response);
    });

    httpServer.listen(port);
}