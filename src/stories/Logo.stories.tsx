import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from '../component/Logo';

const meta: Meta<typeof Logo> = {
    component: Logo,
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
    render: () => <Logo />,
};
