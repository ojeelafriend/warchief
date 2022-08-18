import { Router, Request, Response } from 'express';

import { Creator } from '../../Operators/application/Creator';
import { PostgreSQLRepository } from '../../Operators/framework/PostgreSQLRepository';

const repository = new PostgreSQLRepository();
const creator = new Creator(repository);

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { credentials, identification, fullName } = req.body;

  try {
    await creator.run({ credentials, identification, fullName });

    res.json(`Operator created`).status(200);
  } catch (err) {
    res.json(`Creation failed: ${err}`).status(404);
  }
});

router.get('/:credentials', (req: Request, res: Response) => {
  const { credentials } = req.params;
  res.json(credentials);
});

export default router;
