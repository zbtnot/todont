import React from 'react';

interface LogoProps {
    className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
    return <div className={`ml-2 ${className}`}>
        <a href="/" className="flex flex-row w-fit">
            <img src="./assets/logo.png" className="h-12" alt="a kitten yawning" />
            <span className="text-2xl inline-block mt-2 ml-1">Todont</span>
        </a>
    </div>;
}
