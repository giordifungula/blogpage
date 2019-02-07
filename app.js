var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// var Pokemon = require('./db.json');

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var viewRouter = require('./routes/view');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyParser Middleware
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//this is not needed if you have bodyParser
//express middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//register routes after middleware
app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/view', viewRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

// app.use('/', express.static(__dirname + '/www')); // redirect root
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

module.exports = app;
app.listen(8000);