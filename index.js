var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function (request, response) {
    var message;

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if(request.method === 'GET' && request.url === '/joke') {
        message = getHTML();
    } else {
        message = getImg();
        response.statusCode = 404;
    }

    console.log(message);
    
    response.write(message);
    response.end();
});
server.listen(8080);

function getHTML() {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        console.log(data);
        return data;
    });
};

function getImg() {
    fs.stat('./featured_404.jpg', function(err, stats) {
        if (err) throw err;

        return stats;
    });
};
