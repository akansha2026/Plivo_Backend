"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWebSocket = void 0;
const setupWebSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(`⚡ Client connected: ${socket.id}`);
        socket.on('disconnect', () => {
            console.log(`⚡ Client disconnected: ${socket.id}`);
        });
    });
};
exports.setupWebSocket = setupWebSocket;
