import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TodoList from '@/component/todo/TodoList';
import { TodoContextProviderMock } from '@/stories/mock/TodoContextProviderMock';
import { Todo } from '@/model/Todo';

const meta: Meta<typeof TodoList> = {
    component: TodoList,
};
export default meta;

type Story = StoryObj<typeof TodoList>;

const completedTodo: Todo = {
    description: 'this is a completed task',
    done: true,
};
const incompletedTodo: Todo = {
    description: 'this is an incomplete task',
    done: false,
};

export const WithTodos: Story = {
    render: () => <TodoContextProviderMock>
        <TodoList todos={[
            completedTodo, incompletedTodo
        ]} />
    </TodoContextProviderMock>,
};

export const WithoutTodos: Story = {
    render: () => <TodoContextProviderMock>
        <TodoList todos={[]} />
    </TodoContextProviderMock>,
};

export const CompletedTodos: Story = {
    render: () => <TodoContextProviderMock>
        <TodoList todos={[
            completedTodo
        ]} />
    </TodoContextProviderMock>,
};

export const IncompletedTodos: Story = {
    render: () => <TodoContextProviderMock>
        <TodoList todos={[
            incompletedTodo
        ]} />
    </TodoContextProviderMock>,
};
