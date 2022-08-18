import dotenv from 'dotenv';
dotenv.config();

import { PostgreSQLConnection } from '../Shared/framework/PostgreSQLConnection';

import { getApi } from './http/express';
import { routesManager } from './routes/index';

const api = getApi();

routesManager(api);

const db = new PostgreSQLConnection();
const { HOST, PASSWORD, USER, DATABASE } = process.env;

db.createPool(HOST, DATABASE, USER, PASSWORD);

const server = api.listen(3000, async () => {
  console.log('Server is ready');
  await db.connect();
});

const repository = db.pool;

export { repository, server };
