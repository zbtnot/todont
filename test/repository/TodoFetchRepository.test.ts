import TodoFetchRepository from '@/repository/TodoFetchRepository';
import fetchMock from 'jest-fetch-mock';
import { Todo } from '@/model/Todo';

beforeEach(() => {
    fetchMock.doMock();
});

test('fetches the list of todos', async () => {
    const todos: Todo[] = [
        {
            id: 0,
            description: 'kittens rule',
            done: false,
        },
        {
            id: 1,
            description: 'and so do puppies',
            done: true,
        },
    ];
    fetchMock.mockResponse(JSON.stringify(todos), {
        status: 200,
    });

    const todoFetchRepository = new TodoFetchRepository();
    const actualTodos = await todoFetchRepository.readTodos();
    expect(actualTodos).toEqual(todos);
});

test('throws error when the list of todos is rejected', async () => {
    fetchMock.mockReject(async () => new Error());
    const todoFetchRepository = new TodoFetchRepository();

    await expect(async () => { await todoFetchRepository.readTodos(); }).rejects.toThrow();
});

test('creates a todo', async () => {
    const todo: Todo = {
        description: 'kittens rule',
        done: false,
    };
    fetchMock.mockResponse('', { status: 201 });

    const todoFetchRepository = new TodoFetchRepository();
    const response = await todoFetchRepository.createTodo(todo);
    expect(response.status).toEqual(201);
});

test('fails to create a todo', async () => {
    const badTodo = {}; // missing required fields
    fetchMock.mockReject(async () => new Error());
    const todoFetchRepository = new TodoFetchRepository();

    await expect(async () => { await todoFetchRepository.createTodo(badTodo); }).rejects.toThrow();
});

test('updates a todo', async () => {
    const todo: Todo = {
        description: 'kittens rule',
        done: true,
    };
    fetchMock.mockResponse('', { status: 204 });

    const todoFetchRepository = new TodoFetchRepository();
    const response = await todoFetchRepository.updateTodo(todo);
    expect(response.status).toEqual(204);
});

test('fails to update a todo', async () => {
    const badTodo = {}; // missing required fields
    fetchMock.mockReject(async () => new Error());
    const todoFetchRepository = new TodoFetchRepository();

    await expect(async () => { await todoFetchRepository.updateTodo(badTodo); }).rejects.toThrow();
});

test('deletes a todo', async () => {
    const todo: Todo = {
        id: 1,
        description: 'kittens rule',
        done: true,
    };
    fetchMock.mockResponse('', { status: 204 });

    const todoFetchRepository = new TodoFetchRepository();
    const response = await todoFetchRepository.deleteTodo(todo);
    expect(response.status).toEqual(204);
});

test('fails to delete a todo', async () => {
    const badTodo = {}; // missing required fields
    fetchMock.mockReject(async () => new Error());
    const todoFetchRepository = new TodoFetchRepository();

    await expect(async () => { await todoFetchRepository.deleteTodo(badTodo); }).rejects.toThrow();
});
