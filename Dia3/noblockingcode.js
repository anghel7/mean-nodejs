var fs = require('fs');

fs.readFile('entrada.txt', function (err, data) {
  if (err) {
    console.log('hubo un error: ', err);
    return;
  }
  console.log(data.toString());
});

console.log('programa finalizado');