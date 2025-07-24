import React, { useState } from 'react';

// TaskForm component for adding new tasks
function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addTask(taskTitle); // Call the addTask function passed from App.js
    setTaskTitle(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;