import { getState } from './store.js';
import { registerSocketEvents } from './wss.js'


const socket = io('/');

registerSocketEvents(socket);