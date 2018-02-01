var events = require('events');

var emisorEventos = new events.EventEmitter();

emisorEventos.on('conectar',function () {
  console.log('Conectando con la base de datos');
});

emisorEventos.on('desconectar',function () {
  console.log('Apagando el servidor');
});

emisorEventos.emit('conectar');
emisorEventos.emit('desconectar');
console.log('programa finalizado');