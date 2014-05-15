var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
fs.readFile('index.html', function(err, html) {
	if (err) {
		throw err;
	}
	http.createServer(function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(html);
		res.end();
	}).listen(port);
});