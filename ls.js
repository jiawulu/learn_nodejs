var fs = require('fs');
var files = fs.readdirSync('/home/admin/');
for (fn in files) {
	console.log(files[fn]);
}


