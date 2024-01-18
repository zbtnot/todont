import React from 'react';
import Logo from '@/component/Logo';
import NavBar from '@/component/NavBar';


export default function TodoPage() {
    return <NavBar className="bg-zinc-700">
        <Logo className="w-2/12 mr-2 py-2 text-slate-300" />
    </NavBar>;
}
