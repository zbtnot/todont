import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavBar from '../component/NavBar';

const meta: Meta<typeof NavBar> = {
    component: NavBar,
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
    render: () => <NavBar className="bg-zinc-700 text-slate-300">
        Content goes here
    </NavBar>,
};
