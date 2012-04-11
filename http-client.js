var http = require('http');
var util = require('util');

var req = http.request({
	host: "m.taobao.com",
	method: 'GET'
}, function(res) {
	console.log(res);
	res.on('data', function(chunk) {
		util.log('BODY: ' + chunk);
	});
});
req.end();

function test(args) {

	http.
}
