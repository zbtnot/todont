import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TodoForm from '@/component/todo/TodoForm';
import TodoContextProviderMock from '@/stories/mock/TodoContextProviderMock';

const meta: Meta<typeof TodoForm> = {
    component: TodoForm,
};
export default meta;

type Story = StoryObj<typeof TodoForm>;

export const Default: Story = {
    render: () => <TodoContextProviderMock>
        <TodoForm />
    </TodoContextProviderMock>,
};
