var http = require('http');
var server = http.createServer();
var fs = require('fs');
var isMessage = false;

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if(request.method === 'GET' && request.url === '/joke') {
<<<<<<< HEAD
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
=======
        while(!isMessage) {
            message = getHTML();
        }
    } else {
        while(!isMessage) {
            message = getImg();
        }
        response.statusCode = 404;
    }
    
    response.write(message.toString());
    response.end();
    isMessage = false;
});
server.listen(8080);

function getHTML() {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if (err) throw err;
        isMessage = true;
        
        return data;
    });
};

function getImg() {
    fs.stat('./featured_404.jpg', function(err, stats) {
        if (err) throw err;
        isMessage = true;
        
        return stats;
    });
};
>>>>>>> fd01c891c51946a2fa88e6a69d5dd09d8ea4876e
