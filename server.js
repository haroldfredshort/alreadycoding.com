var express = require('express');
var compress = require('compression');

var app = express();

app.use(compress());

app.all(/.*/, function(req, res, next) {
	var host = req.header("host");
	if (host.match(/^www\..*/i)) {
		res.redirect(301, req.protocol + '://alreadycoding.com');
		res.end();
	} else {
		next();
	}
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 1337;
app.listen(port);