import React, { useContext, useState } from 'react';
import { ArrowUturnLeftIcon, CheckCircleIcon, PencilSquareIcon } from '@heroicons/react/16/solid';
import { Todo } from '@/model/Todo';
import { TodoContext } from '@/component/state/TodoContext';

interface TodoItemProps {
    todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [description, setDescription] = useState<string>(todo.description);
    const [done, setDone] = useState<boolean>(todo.done);
    const { setError, updateTodo, todoFetchRepository } = useContext(TodoContext);

    const handleEdit = async (): Promise<void> => {
        if (description === todo.description) {
            setEditMode(!editMode);
            return;
        }

        try {
            setError(null); // clear any errors before attempting a new request
            await todoFetchRepository.updateTodo(todo);
            setEditMode(!editMode);
            updateTodo(todo);
        } catch (e) {
            setError(e);
        }
    };

    const toggleEditOnEnter = async (input: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
        if (input.key !== 'Enter') {
            return;
        }
        await handleEdit();
    };

    const handleToggleDone = async (): Promise<void> => {
        try {
            const updatedTodo: Todo = {
                id: todo.id,
                description,
                done: !done,
            };
            setError(null); // clear any errors before attempting a new request
            setDone(!done);
            await todoFetchRepository.updateTodo(updatedTodo);
            updateTodo(updatedTodo);
        } catch (e) {
            setError(e);
        }
    };

    return (
        <>
            <li
                key={todo.id}
                className="
                    flex flex-row
                    text-xl
                    text-slate-300
                    even:bg-gray-600
                    odd:bg-gray-800
                "
            >
                <div className={editMode ? 'bg-amber-500 hover:bg-amber-400' : 'bg-blue-500 hover:bg-blue-400'}>
                    <button className="h-full w-full p-3" onClick={handleEdit}>
                        <PencilSquareIcon className="h-4 w-4" />
                    </button>
                </div>
                <div className="w-full">
                    {editMode
                        ? <input
                            className="
                                h-full w-full p-3
                                bg-transparent
                                focus:outline focus:outline-2 focus:outline-amber-500
                            "
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onKeyDown={toggleEditOnEnter}
                            autoFocus
                        />
                        : <div className="p-3">
                            {description}
                        </div>
                    }
                </div>
                <div className={editMode
                    ? 'bg-slate-500 hover:bg-slate-400'
                    : todo.done
                        ? 'bg-amber-500 hover:bg-amber-400'
                        : 'bg-green-500 hover:bg-green-400'
                }>
                    <button
                        className={`h-full w-full p-3 ${editMode ? 'cursor-not-allowed' : ''}`}
                        onClick={handleToggleDone}
                        disabled={editMode}
                    >
                        {
                            todo.done
                                ? <ArrowUturnLeftIcon className="h-4 w-4" />
                                : <CheckCircleIcon className="h-4 w-4" />
                        }
                    </button>
                </div>
            </li>
        </>
    );
}
