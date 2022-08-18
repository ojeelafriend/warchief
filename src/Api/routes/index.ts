import { Express } from 'express';
import operator from './operator';

export const routesManager = (server: Express) => {
  server.use('/operator', operator);
};
