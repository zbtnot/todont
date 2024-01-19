import { Todo } from '@/model/Todo';
import AbstractFetchRepository from '@/repository/AbstractFetchRepository';

/**
 * Repository which handles CRUD methods to the backend.
 */
export default class TodoFetchRepository extends AbstractFetchRepository {
    public async createTodo(todo: Todo): Promise<Response> {
        const options: RequestInit = Object.assign({}, this.options, {
            method: 'POST',
            body: JSON.stringify(todo),
        });

        const response = await fetch('/api/todo', options);
        if (!response.ok) {
            throw new Error('Could not create this todo. Please try again later.');
        }

        return response;
    }

    public async readTodos(): Promise<Todo[]> {
        const options: RequestInit = Object.assign({}, this.options, {
            method: 'GET',
        });
        const response = await fetch('/api/todo', options);
        if (!response.ok) {
            throw new Error('Could not fetch your todo list. Please try again later.');
        }

        return await response.json();
    }

    public async deleteTodo(todo: Todo): Promise<Response> {
        const options: RequestInit = Object.assign({}, this.options, {
            method: 'DELETE',
        });

        const response = await fetch(`/api/todo/${todo.id}`, options);
        if (!response.ok) {
            throw new Error('Could not remove this todo. Please try again later.');
        }

        return response;
    }

    public async updateTodo(todo: Todo): Promise<Response> {
        const options: RequestInit = Object.assign({}, this.options, {
            method: 'PUT',
            body: JSON.stringify(todo),
        });

        const response = await fetch(`/api/todo/${todo.id}`, options);
        if (!response.ok) {
            throw new Error('Could not update this todo. Please try again later.');
        }

        return response;
    }
}
