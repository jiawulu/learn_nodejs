var fs = require('fs');
var mime = require('mime');
exports.handle = function(req, res) {
	if (req.method !== "GET") {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end("invalid method " + req.method);
	} else if (req.container.options.iconPath !== undefined) {
		fs.readFile(req.container.options.iconPath, function(err, buf) {
			if (err) {
				res.writeHead(500, {
					'Content-Type': 'text/plain'
				});
				res.end(
				req.container.options.iconPath + " not found");
			} else {
				res.writeHead(200, {
					'Content-Type': mime.lookup(req.container.options.iconPath),
					'Content-Length': buf.length
				});
				res.end(buf);
			}
		});
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end("no favicon");
	}
}
