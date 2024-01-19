import React from 'react';

interface NotificationBarProps {
    className?: string;
    message?: string;
}

/**
 * A bar to display notifications (such as errors) to the user.
 */
export default function NotificationBar({ className = '', message = '' }: NotificationBarProps) {
    return (
        <>
            {message.length === 0 ? '' :
                <div className={"bg-red-300 text-red-800 " + className}>
                    {message}
                </div>
            }
        </>
    );
}
