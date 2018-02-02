var http = require('http');
var url = require('url');

var servidor = http.createServer(function (request, response) {
  var ruta = url.parse(request.url);
  console.log('ruta del recurso y los parametros: ', ruta.path);
  console.log('solo el recurso     :'+ruta.pathname);
  console.log('parametros del recurso: ', ruta.query);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<html><html><head></head><body>Hola mundo</body></html>');
});

servidor.listen(8080);

console.log('servidor corriendo en el puerto 8080');