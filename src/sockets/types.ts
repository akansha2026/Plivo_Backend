export type IncidentUpdateSocketEventType = 'add' | 'remove';

export type IncidentUpdateSocketPayload = {
  type: IncidentUpdateSocketEventType;
  incidentId: string;
  update: any;
};