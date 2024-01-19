import React from 'react';
import { Todo } from '@/model/Todo';
import TodoItem from '@/component/todo/TodoItem';

interface TodoListProps {
    todos: Todo[];
}

/**
 * The container for todo items.
 */
export default function TodoList({ todos }: TodoListProps) {
    const incomplete = todos.filter((todo: Todo) => !todo.done);
    const completed = todos.filter((todo: Todo) => todo.done);
    return (
        <>
            <div className="text-slate-300">
                <div className="px-2 mt-4 w-full bg-zinc-700">
                    <div className="text-2xl border-0 border-b-2 border-slate-300 p-2">
                        Todo
                    </div>
                    {
                        incomplete.length === 0 ? <div className="p-2">Add something to do!</div>
                            : <ul>
                                {
                                    incomplete.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
                                }
                            </ul>
                    }
                </div>

                <div className="px-2 mt-4 w-full bg-zinc-700">
                    <div className="text-2xl border-0 border-b-2 border-slate-300 p-2">
                        Completed
                    </div>
                    {
                        completed.length === 0 ? <div className="p-2">Nothing completed yet. Keep going!</div>
                            : <ul>
                                {
                                    completed.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
                                }
                            </ul>
                    }
                </div>
            </div>
        </>
    );
};
