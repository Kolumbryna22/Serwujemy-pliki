var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if(request.method === 'GET' && request.url === '/joke') {
        getHTML(sendResponse);
    } else {
        getImg(sendResponse);
        response.statusCode = 404;
    }
});
server.listen(8080);

function sendResponse(message) {
    response.write(message.toString());
    response.end();
}

function getHTML() {
    fs.readFileSync('./index.html', 'utf-8', function(err, data) {
        if (err) throw err;

        next(data);
    });
};

function getImg() {
    fs.statSync('./featured_404.jpg', function(err, stats) {
        if (err) throw err;

        next(stats);
    });
};
