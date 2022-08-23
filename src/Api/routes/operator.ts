import { Router, Request, Response } from 'express';

import { PostgreSQLRepository } from '../../Operators/framework/PostgreSQLRepository';

import { Creator } from '../../Operators/application/Creator';
import { ListOne } from '../../Operators/application/ListOne';
import { List } from '../../Operators/application/List';

const router: Router = Router();

const repository = new PostgreSQLRepository();

const creator = new Creator(repository);
const listOne = new ListOne(repository);
const list = new List(repository);

router.post('/', async (req: Request, res: Response) => {
  const { credentials, identification, fullName } = req.body;

  try {
    await creator.run({ credentials, identification, fullName });

    res.json(`Operator created`).status(200);
  } catch (err) {
    res.json(`Creation failed: ${err}`).status(404);
  }
});

router.get('/:credentials', async (req: Request, res: Response) => {
  const { credentials } = req.params;

  try {
    let operator = await listOne.run(credentials.replace('$', '#'));

    res.json(operator).status(200);
  } catch (err) {
    res.json({ failed: err }).status(404);
  }
});

router.get('/', async (req: Request, res: Response) => {
  const { page } = req.query;
  try {
    const operators = await list.run(page);

    res.json(operators).status(200);
  } catch (err) {
    res.json({ failed: `Internal Error` }).status(500);
  }
});

export default router;
