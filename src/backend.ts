import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import knex, { Knex } from 'knex';
import { Todo } from '@/model/Todo';
import validTodoBody from '@/middleware/validTodoBody';

const app = express();
app.use(express.json());

const db: Knex = knex({
    client: process.env.DATABASE_DRIVER,
    connection: {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
    },
});

app.get(
    '/todo',
    [],
    async (_req: Request, res: Response): Promise<void> => {
        let todos: Todo[] = await db<Todo>('todo')
            .select([
                'id',
                'description',
                'done',
            ]);

        // boolean types in mysql are actually tinyint(1),
        // so this map converts them to the correct type.
        todos = todos.map<Todo>((todo): Todo => ({
            id: todo.id,
            description: todo.description,
            done: Boolean(todo.done),
        }));

        res.json(todos);
    },
);

app.get(
    '/todo/:todoId',
    [],
    async (req: Request, res: Response): Promise<void> => {
        const { todoId } = req.params;
        const todo: Todo | undefined = await db<Todo>('todo')
            .select([
                'id',
                'description',
                'done',
            ])
            .where('id', Number(todoId))
            .first();

        if (!todo) {
            res.status(StatusCodes.NOT_FOUND).send();
            return;
        }

        // boolean types in mysql are actually tinyint(1),
        // so we need to explicitly convert this.
        todo.done = Boolean(todo.done);

        res.json(todo);
    },
);

app.post(
    '/todo',
    [validTodoBody],
    async (req: Request, res: Response): Promise<void> => {
        const [id] = await db('todo').insert(req.body);
        res.status(StatusCodes.CREATED).header('Location', `/todo/${id}`).send();
    },
);

app.put(
    '/todo/:todoId',
    [validTodoBody],
    async (req: Request, res: Response): Promise<void> => {
        const { todoId } = req.params;
        const todo = await db<Todo>('todo')
            .update(<Todo>{
                description: req.body.description,
                done: req.body.done,
            })
            .where('todo.id', Number(todoId));

        if (!todo) {
            res.status(StatusCodes.NOT_FOUND).send();
            return;
        }

        res.status(StatusCodes.NO_CONTENT).send();
    },
);

app.delete(
    '/todo/:todoId',
    [],
    async (req: Request, res: Response): Promise<void> => {
        const { todoId } = req.params;
        const rowsAffected = await db<Todo>('todo')
            .delete()
            .where('id', todoId);

        if (rowsAffected === 0) {
            res.status(StatusCodes.NOT_FOUND).send();
            return;
        }

        res.status(StatusCodes.NO_CONTENT).send();
    },
);

// eslint-disable-next-line no-console
console.info('listening on 80');
app.listen(80);
