var express = require('express');
var compress = require('compression');

var app = express();

app.get('/*', function(req, res, next) {
	if (req.headers.host.match(/^www\./) !== null) {
		res.redirect(req.protocol + '://' + req.headers.host.replace(/^www\./, '') + req.url, 301);
	} else {
		next();
	}
});

app.use(compress());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 1337;
app.listen(port);