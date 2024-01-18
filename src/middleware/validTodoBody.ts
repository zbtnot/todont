import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError, ZodIssue } from 'zod';
import { TodoSchema } from '@/model/Todo';

export default function validTodoBody(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    try {
        TodoSchema.parse(req.body);
        next();
    } catch (e) {
        const issueMapper = (issue: ZodIssue) => {
            const path = Array.isArray(issue.path) ? issue.path.join('.') : issue.path;
            return `${path}: ${issue.message}`;
        };

        let message = ['Unable to parse this todo message'];
        if (e instanceof ZodError) {
            message = e.issues.map(issueMapper);
        }
        res.status(StatusCodes.UNPROCESSABLE_ENTITY)
            .json({ error: message })
            .send();
    }
}
