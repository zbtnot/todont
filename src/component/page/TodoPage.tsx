import React, { useEffect, useState } from 'react';
import Logo from '@/component/Logo';
import NavBar from '@/component/NavBar';
import TodoFetchRepository from '@/repository/TodoFetchRepository';
import { Todo } from '@/model/Todo';
import TodoList from '@/component/todo/TodoList';
import { TodoContext } from '@/component/state/TodoContext';

const todoFetchRepository = new TodoFetchRepository();
/**
 * The page containing navigation and todo-list elements.
 */
export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState<Error>();

    const addTodo = async (todo: Todo): Promise<void> => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (update: Todo) => {
        setTodos(todos.map((todo) => todo.id === update.id ? update : todo));
    };

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await todoFetchRepository.readTodos();
            setTodos(todos);
        };
        fetchTodos().catch((e) => setError(e));
    }, []);

    return (
        <TodoContext.Provider value={{
            addTodo,
            updateTodo,
            setError,
            todoFetchRepository,
        }}>
            <NavBar className="bg-zinc-700">
                <Logo className="w-2/12 mr-2 py-2 text-slate-300" />
            </NavBar>
            <TodoList todos={todos} />
        </TodoContext.Provider>
    );
}
