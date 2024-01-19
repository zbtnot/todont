import React from 'react';
import { TodoContext, TodoContextValues } from '@/component/state/TodoContext';
import TodoFetchRepository from '@/repository/TodoFetchRepository';

export const TodoContextProviderMock = ({ children }) => {
    const dummyCallback = () => {
    };
    const providerValues: TodoContextValues = {
        addTodo: dummyCallback,
        updateTodo: dummyCallback,
        setError: dummyCallback,
        todoFetchRepository: new TodoFetchRepository(),
    };

    return <TodoContext.Provider value={providerValues}>{children}</TodoContext.Provider>;
};
