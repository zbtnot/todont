import React, { PropsWithChildren } from 'react';

interface NavBarProps {
    className?: string;
}

/**
 * The control which exposes top-level actions for the user.
 */
export default function NavBar({ className = '', children }: PropsWithChildren<NavBarProps>) {
    return (
        <>
            <div className={`flex flex-row ${className}`}>
                {children}
            </div>
        </>
    );
}
