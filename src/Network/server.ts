import { getApi } from './http/express';
import { routesManager } from './routes/index';

const api = getApi();

routesManager(api);

api.listen(3000, () => {
  console.log('Server is ready');
});
