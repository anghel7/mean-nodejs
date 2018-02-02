var http = require('http');

var servidor = http.createServer(function (request, response) {  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<html><head></head><body><h1>Hello world</h1></body></html>');
  //mime types
});

servidor.listen(8080);
servidor = require('http-shutdown')(servidor);
// npm install http-shutdown
console.log('Servidor corriendo en el puerto 8080');



setTimeout(function() {
  
  servidor.shutdown(function () {
    console.log('servidor apagado');
  });


}, 5000);