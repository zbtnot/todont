import React from 'react';
import { Todo } from '@/model/Todo';
import TodoFetchRepository from '@/repository/TodoFetchRepository';

export interface TodoContextValues {
    addTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    setError: (error: Error) => void;
    todoFetchRepository: TodoFetchRepository;
}
export const TodoContext = React.createContext<TodoContextValues>(null);
