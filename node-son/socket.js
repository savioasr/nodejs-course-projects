var ws = require('websocket').server;
var http = require('http');

var socket = new ws({
    httpServer: http.createServer().listen(3000)
});

socket.on('request', function(req){
    var conn = req.accept(null, req.origin);
    
    console.log(req.origin);

    conn.on('message', function(message){
        conn.sendUTF('Hello');
    });

    conn.on('end', function(message){
        conn.sendUTF('Close');
    });

});