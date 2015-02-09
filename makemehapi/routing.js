var Hapi = require('hapi');
var port = process.env.port || 8080;

var server = Hapi.createServer('localhost',port)

server.route({
    path: '/{name}',
    method: 'GET',
    handler: function(request,reply){
        reply('Hello ' + request.params.name);
    }
})

server.start(function(){
    console.log('Hapi server running @' + server.info.uri)
});