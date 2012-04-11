var app = require('express').createServer();

//var ejs = require('ejs');


// bodyParser middleware, which will parse application/x-www-form-urlencoded and 
// application/json request bodies and place the variables in req.body.
//app.use(app.router);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
//app.set('view options', {layout: false});

app.get('/', function(req, res){
	//res.render('hello');
	 res.render('index', { title: 'Express' })
});

app.get('/hello', function(req, res){
	//res.render('hello');
	 res.render('hello.ejs', { title: 'Express' })
});


app.listen(8080);