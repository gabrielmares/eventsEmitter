const events = require('events');

const eventEmitter = new events();
// Eventos que se suscribe cada peticion
eventEmitter.on('get', function () {
    console.log('llegada de peticion get')
})

eventEmitter.on('post', function () {
    console.log('llegada de peticion post')
})

eventEmitter.on('put', function () {
    console.log('llegada de peticion put')
})

eventEmitter.on('delete', function () {
    console.log('llegada de peticion delete')
})


module.exports = eventEmitter