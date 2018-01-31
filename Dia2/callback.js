function haceralgo(accion, funcionFinalizacion) {
  var detalleAccion = 'Estoi '+accion;
  console.log(detalleAccion);


  funcionFinalizacion('aaaadda');
};

haceralgo('trbajando',function(parametro){
  console.log('Se ha terminado de hacer algo');
  console.log('<<'+parametro+'>>');
});
// arrow function
// funciones flecha

