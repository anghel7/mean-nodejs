function haceAlgo(accion, callback) {
 console.log('Estoi: '+accion+' mucho tiempo');
 
 // Avisa que la funcion a terminado de ejecutarse
 // 'gjhg'(); no esta bien
 callback(3,4,5);
}

haceAlgo('Trabajando', function (a, b, c) {  
  var suma = a + b + c;
  console.log('La suma total es: ', suma);
  console.log('funcion finalizada');
});