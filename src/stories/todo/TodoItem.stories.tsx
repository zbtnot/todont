import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TodoItem from '@/component/todo/TodoItem';
import { Todo } from '@/model/Todo';
import TodoContextProviderMock from '@/stories/mock/TodoContextProviderMock';

const meta: Meta<typeof TodoItem> = {
    component: TodoItem,
};
export default meta;

type Story = StoryObj<typeof TodoItem>;

const incompleteTodo: Todo = {
    description: 'this is an incomplete task',
    done: false,
};
export const IncompleteTodo: Story = {
    render: () => <TodoContextProviderMock>
        <TodoItem todo={incompleteTodo} />
    </TodoContextProviderMock>,
};

const completedTodo: Todo = {
    description: 'this is a completed task',
    done: true,
};
export const CompletedTodo: Story = {
    render: () => <TodoContextProviderMock>
        <TodoItem todo={completedTodo} />
    </TodoContextProviderMock>,
};
