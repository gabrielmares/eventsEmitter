const express = require('express');
const eventEmitter = require('./events')
const app = express();
/*
Cuando hay una peticion por medio de cada metodo emite el evento
con el metodo por el que llego, simulando el evento a comunicar al microservicio
*/
app.get('/', (req, res) => {
    eventEmitter.emit('get')
    res.status(200).json({ evento: req.method })
})

app.post('/', (req, res) => {
    eventEmitter.emit('post')
    res.status(200).json({ evento: req.method })
})

app.put('/', (req, res) => {
    eventEmitter.emit('put')
    res.status(200).json({ evento: req.method })
})

app.delete('/', (req, res) => {
    eventEmitter.emit('delete')
    res.status(200).json({ evento: req.method })
})
app.listen(4000)