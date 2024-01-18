import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
app.use(express.json());

app.get(
    '/',
    [],
    async (_req: Request, res: Response): Promise<void> => {
        res.status(StatusCodes.OK).send('Hello!');
    },
);

console.info('listening on 80');
app.listen(80);
