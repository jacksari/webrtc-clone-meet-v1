import { setSocketId } from './store.js';
import { updatePersonalCode } from './ui.js'

export const registerSocketEvents = (socket) => {
    socket.on('connect', () => {
        console.log('success connected to socket server');
        setSocketId(socket.id);
        updatePersonalCode(socket.id)
    })
}