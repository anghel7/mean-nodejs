var http = require('http');
var url = require('url');
var fs = require('fs');

var servidor = http.createServer(function (request, response) {
  var ruta = url.parse(request.url);
  var rutaEstaatica = 'static' + ruta.pathname;

  fs.exists(rutaEstaatica, function (existe) {
    if (existe) {
      fs.readFile(rutaEstaatica, function (err, content) {
        if (err) {
          console.log('Hubo un error al leer el archivo');
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.end(content);
        }
      });
    } else {
      console.log('la no ruta existe');
    }
  });
});

servidor.listen(8080);

console.log('servidor corriendo en el puerto 8080');