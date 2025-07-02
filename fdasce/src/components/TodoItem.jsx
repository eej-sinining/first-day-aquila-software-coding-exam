import React from "react";

export default function TodoItem({ todo, index, editIndex, editValue, setEditValue, saveTodo, editTodo, deleteTodo }) {
    return (
        <li className="border p-2 flex justify-between items-center">
            {editIndex === index ? (
            <>
                <input
                    className="border p-1 mr-2 flex-grow"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                    onClick={saveTodo}
                    className="text-sm bg-blue-500 text-white px-2 py-1"
                >
                    Save
                </button>
            </>
        ) : (
        <>
            <span className="flex-grow">{todo}</span>
            <div className="flex gap-1 ml-2">
            <button
                onClick={() => editTodo(index)}
                className="text-sm bg-yellow-400 text-white px-2 py-1"
            >
                Edit
            </button>
            <button
                onClick={() => deleteTodo(index)}
                className="text-sm bg-red-500 text-white px-2 py-1"
            >
                Delete
            </button>
            </div>
        </>
        )}
    </li>
    );
}
