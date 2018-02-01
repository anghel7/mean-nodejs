var events = require('events');

var eventEmmiter = new events.EventEmitter();

var listener1 = function () {
  console.log('Encendiendo el servidor MySQL');
};

var listener2 = function () {
  console.log('Encendiendo el servidor PostgresSQL');
};

eventEmmiter.addListener('encenderServidores', listener1);

eventEmmiter.addListener('encenderServidores', listener2);

eventEmmiter.emit('encenderServidores');

/* var cantListeners = events.listenerCount(eventEmmiter, 'encenderServidores');

console.log(cantListeners); */

console.log('Program finalizado');