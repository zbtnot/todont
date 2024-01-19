import React from 'react';
import { TodoContext, TodoContextValues } from '@/component/state/TodoContext';
import TodoFetchRepository from '@/repository/TodoFetchRepository';

/**
 * Provides a wrapper for TodoContext.Provider so stories that leverage useContext() render correctly.
 */
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
