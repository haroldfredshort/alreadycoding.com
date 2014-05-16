var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
fs.readFile('index.html', function(err, html) {
	if (err) {
		throw err;
	}
	redirect = function(host, res, pattern, redirect){
		if (host == pattern || (pattern instanceof RegExp && host.match(pattern))) {
			res.writeHead(301, {
			'location': redirect
		});
		res.end();
	}};
	http.createServer(function(req, res) {
		redirect(req.headers.host, res, /^www/, req.protocol + '://alreadycoding.com');
		redirect(req.headers.host, res, 'www.alreadycoding.com', req.protocol + '://alreadycoding.com');
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(html);
		res.end();
	}).listen(port);
});