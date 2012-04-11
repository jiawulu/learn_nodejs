var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
    console.log("cluster forked...");
  }
  
  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
  console.log("after master");
} else {
  // Worker processes have a http server.
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
  console.log("server start at port 8000");
}
console.log("start successfully");
