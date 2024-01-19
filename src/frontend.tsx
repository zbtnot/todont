import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import TodoPage from '@/component/page/TodoPage';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <StrictMode>
        <TodoPage />
    </StrictMode>,
);
