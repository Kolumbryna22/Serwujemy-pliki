var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if(request.method === 'GET' && request.url === '/joke') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
    
            response.write(data.toString());
            response.end();
        });
    } else {    
        fs.readFile("featured_404.jpg", "binary", function(err, file) {
            if (err) throw err;

            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        });
        response.statusCode = 404;
    }
});
server.listen(8080);
