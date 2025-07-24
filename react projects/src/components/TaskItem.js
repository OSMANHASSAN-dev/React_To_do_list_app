import React, { useState } from 'react';

// TaskItem component to display and manage individual tasks
function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  // State to manage inline editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to hold the edited task title
  const [editedTitle, setEditedTitle] = useState(task.title);

  // Handle saving the edited title
  const handleEditSave = () => {
    if (editedTitle.trim() && editedTitle !== task.title) {
      editTask(task.id, editedTitle);
    }
    setIsEditing(false); // Exit editing mode
  };

  // Handle key presses in the edit input (e.g., Enter to save)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      setEditedTitle(task.title); // Revert to original title
      setIsEditing(false); // Exit editing mode
    }
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
      <div className="flex items-center flex-grow min-w-0">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="form-checkbox h-5 w-5 text-indigo-600 dark:text-indigo-400 rounded focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-200"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleEditSave} // Save on blur
            onKeyDown={handleKeyDown} // Save on Enter, cancel on Escape
            autoFocus // Focus the input when entering edit mode
            className="ml-3 flex-grow p-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
          />
        ) : (
          <span
            className={`ml-3 text-lg break-words flex-grow ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-100'}`}
            onDoubleClick={() => setIsEditing(true)} // Double click to edit
            title="Double click to edit"
          >
            {task.title}
          </span>
        )}
      </div>
      <div className="flex-shrink-0 ml-4 space-x-2">
        {!isEditing && ( // Only show edit button if not already editing
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Edit task"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.38-2.828-2.829z"></path>
            </svg>
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 rounded-full text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
          aria-label="Delete task"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm-1 3a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;