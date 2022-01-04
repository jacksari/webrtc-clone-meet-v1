const socket = io('/');

socket.on('connect', () => {
    console.log('success connected to socket server');
    console.log(socket.id);
})