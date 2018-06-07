var http = require('http');
var handle =  require('./handle');

var events = require('events');
var emiter = new events.EventEmitter();

require('console-log-hello-world');

emiter.on('say', say);

function say() {
    console.log('im saying...');
}

emiter.emit('say');

var server = http.createServer(handle);

server.listen(3000, function(){
    console.log('Server is listening as port 3000');
});