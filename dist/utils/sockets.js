"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitIncidentUpdate = void 0;
const server_1 = require("../server");
const emitIncidentUpdate = (payload) => {
    server_1.io.emit('incident-update', payload);
};
exports.emitIncidentUpdate = emitIncidentUpdate;
