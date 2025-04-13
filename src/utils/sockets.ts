import { io } from '../server';
import { IncidentUpdateSocketPayload } from '../sockets/types';

export const emitIncidentUpdate = (payload: IncidentUpdateSocketPayload) => {
  io.emit('incident-update', payload);
};