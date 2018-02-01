var http = require('http');

http.createServer(function (request, response) {  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<html><head></head><body><h1>Hello world</h1></body></html>');
  //mime types
}).listen(8080);

console.log('Servidor corriendo en el puerto 8080');