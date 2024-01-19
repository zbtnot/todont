import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NotificationBar from '@/component/NotificationBar';

const meta: Meta<typeof NotificationBar> = {
    component: NotificationBar,
};
export default meta;

type Story = StoryObj<typeof NotificationBar>;

export const WithMessage: Story = {
    render: () => <NotificationBar message={'A message!'} />,
};
