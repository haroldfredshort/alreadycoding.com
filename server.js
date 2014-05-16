var express = require('express');
var compress = require('compression');

var app = express();

app.use(compress());

app.all(/.*/, function(req, res, next) {
	if (req.headers.host.match(/^www\./) !== null) {
		res.redirect(301, req.protocol + '://' + req.headers.host.replace(/^www\./, '') + req.url);
	} else {
		next();
	}
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 1337;
app.listen(port);