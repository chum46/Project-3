var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let
    redis = require('redis'),
    /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
    client = redis.createClient({
        port: 16231,               // replace with your port
        host: 'redis-16231.c85.us-east-1-2.ec2.cloud.redislabs.com',        // replace with your hostanme or IP address
        password: 'bi4Fxi9q3C9nQor7LNhBnIBK61TJn2KU',    // replace with your password
    });
module.exports = app;
