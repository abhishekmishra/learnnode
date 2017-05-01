const net = require('net');
const strftime = require('strftime');

if (process.argv.length > 2) {
    var port = process.argv[2];

    var server = net.createServer(function (socket) {
        //socket handling logic
        var tm = strftime("%Y-%m-%d %H:%M\n", new Date());
        socket.end(tm);
    });
    server.listen(port);
}