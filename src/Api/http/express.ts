import { Express } from 'express';
import express from 'express';

export const getApi = (): Express => {
  const api = express();
  api.use(express.json(), express.urlencoded({ extended: false }));

  return api;
};
