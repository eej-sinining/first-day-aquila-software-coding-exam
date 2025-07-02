import React from "react";
import TodoItem from './TodoItem';


export default function TodoList({
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    editIndex,
    editValue,
    setEditValue,
    saveTodo,
    editTodo,
    deleteTodo,
    handleLogout
}) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Todo List</h2>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-500 underline"
                    >
                        Logout
                    </button>
                </div>
                <div className="flex mb-4">
                    <input
                        className="border p-2 flex-grow mr-2"
                        placeholder="Add task"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        onClick={addTodo}
                        className="bg-green-500 text-white px-4 py-2"
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        editIndex={editIndex}
                        editValue={editValue}
                        setEditValue={setEditValue}
                        saveTodo={saveTodo}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    </div>
    );
}
