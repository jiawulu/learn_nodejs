var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});


// basepath Application base path used for res.redirect() and transparently handling mounted apps.
// views Root views directory defaulting to CWD/views
// view engine Default view engine name for views rendered without extensions
// view options An object specifying global view options
// view cache Enable view caching (enabled in production)
// case sensitive routes Enable case-sensitive routing
// strict routing When enabled trailing slashes are no longer ignored
// jsonp callback Enable res.send() / res.json() transparent jsonp support
app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});


// bodyParser middleware, which will parse application/x-www-form-urlencoded and 
// application/json request bodies and place the variables in req.body.
app.use(express.bodyParser());
app.use(express.logger({ format: ':method :url' }));
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler({ dumpExceptions: true }));

app.get('/user/:id?', function(req, res,next){
    //res.send('user ' + req.params.id);
    next();
});

app.get('/user', function(req, res){
    console.log("users");
});



/*
"/user/:id"
 /user/12

 "/users/:id?"
 /users/5
 /users

 "/files/*"
 /files/jquery.js
 /files/javascripts/jquery.js

 "/file/*.*"
 /files/jquery.js
 /files/javascripts/jquery.js

 "/user/:id/:operation?"
 /user/1
 /user/1/edit

 "/products.:format"
 /products.json
 /products.xml

 "/products.:format?"
 /products.json
 /products.xml
 /products

 "/user/:id.:format?"
 /user/12
 /user/12.json*/
app.get(/^\/users?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){
    res.send(req.params);
});





app.listen(3000);

