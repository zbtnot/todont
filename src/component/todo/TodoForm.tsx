import React, { useContext, useState } from 'react';
import { Todo } from '@/model/Todo';
import { TodoContext, TodoContextValues } from '@/component/state/TodoContext';

interface TodoBoxProps {
    className?: string;
}

/**
 * A text input that generates a Todo.
 */
export default function TodoForm({ className = '' }: TodoBoxProps) {
    const [description, setDescription] = useState<string>('');
    const { setError, addTodo, todoFetchRepository } = useContext<TodoContextValues>(TodoContext);

    const handleKeyboardAdd = async (input: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
        if (input.key !== 'Enter') {
            return;
        }
        const todo: Todo = {
            description,
            done: false,
        };

        try {
            setError(null); // clear any errors before attempting a new request
            const result = await todoFetchRepository.createTodo(todo);
            if (result.ok) {
                const location = result.headers.get('Location');
                todo.id = Number(location.slice(location.lastIndexOf('/') + 1));
                setDescription('');
                addTodo(todo);
            }
        } catch (e) {
            setError(new Error('Could not add the todo'));
        }
    };

    return (
        <>
            <div className={ `w-full ${className}` }>
                <input
                    className="
                        w-full p-3
                        bg-gray-600 text-slate-300
                        focus:outline focus:outline-2 focus:outline-amber-500
                    "
                    type="text"
                    onKeyDown={handleKeyboardAdd}
                    placeholder="Add a task"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoFocus
                />
            </div>
        </>
    );
}
