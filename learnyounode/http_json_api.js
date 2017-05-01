const http = require('http');
const map = require('through2-map')
const url = require('url')

if (process.argv.length > 2) {
    var port = process.argv[2];

    var httpServer = http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        urlobj = url.parse(request.url, true);
        var rstr;
        var isotime = Date.parse(urlobj.query.iso);
        if (urlobj.pathname == '/api/parsetime') {
            var d = new Date(isotime);
            rstr = {};
            rstr['hour'] = d.getHours();
            rstr['minute'] = d.getMinutes();
            rstr['second'] = d.getSeconds();
        } else if (urlobj.pathname == '/api/unixtime') {
            rstr = {};
            rstr['unixtime'] = isotime;
        }
        rstr = JSON.stringify(rstr);

        response.write(rstr);
        response.end();
    });

    httpServer.listen(port);
}