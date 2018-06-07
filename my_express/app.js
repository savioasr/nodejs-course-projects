var express = require('express');

var app = new express();

app.listen(3000, function(){
    console.log('OK');
});

app.get('/', function(req, res){
    res.send('Ok');
});