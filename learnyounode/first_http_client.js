var http = require('http');

function handleResponse(response) {
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on('error', console.error);
}

if(process.argv.length > 2) {
    var url = process.argv[2];
    http.get(url, handleResponse);
}