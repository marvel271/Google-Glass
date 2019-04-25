var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
    function render(err, data) {
        console.log(req.url)

        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    }
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', render);
    } else {
        fs.readFile(__dirname + req.url, render);
    }
}).listen(process.env.PORT || 8080);