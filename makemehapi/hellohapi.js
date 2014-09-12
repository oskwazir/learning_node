var Hapi = require('hapi');
var port = Number(process.argv[2] || 8080);

var server = Hapi.createServer('localhost',port)

server.route({
    path: '/',
    method: 'GET',
    handler: function(request,reply){
        reply('Hello Hapi');
    }
})

server.start();
