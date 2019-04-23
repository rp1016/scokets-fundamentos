var socket = io();
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

// son para escuchar información. 
socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
});

// son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log("respuesta server: " + JSON.stringify(resp));
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('SERVIDOR: ' + JSON.stringify(mensaje));
});