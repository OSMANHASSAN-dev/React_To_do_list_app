import React, { useState, useEffect, useCallback } from 'react';
// Corrected paths to components and hooks, now relative to the root of 'react projects'
import Header from './src/components/Header';
import TaskForm from './src/components/TaskForm';
import TaskItem from './src/components/TaskItem';
import FilterButtons from './src/components/FilterButtons';
import useLocalStorage from './src/hooks/useLocalStorage';

// Main App component
function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useLocalStorage('react-todo-list-tasks', []);
  // State to manage the current filter (all, active, completed)
  const [filter, setFilter] = useState('all');
  // State to manage the sorting option (createdAt, status)
  const [sortBy, setSortBy] = useState('createdAt');
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useLocalStorage('react-todo-list-dark-mode', false);

  // Effect to apply/remove dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Function to add a new task
  const addTask = useCallback((title) => {
    if (title.trim()) { // Ensure title is not empty
      const newId = Date.now(); // Unique ID for the task
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: newId, title, completed: false, createdAt: newId }, // createdAt for sorting
      ]);
    }
  }, [setTasks]);

  // Function to toggle task completion status
  const toggleComplete = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  // Function to delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  // Function to edit a task's title
  const editTask = useCallback((id, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  }, [setTasks]);

  // Filter tasks based on the current filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    } else if (filter === 'completed') {
      return task.completed;
    }
    return true; // 'all' filter
  });

  // Sort tasks based on the current sort option
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'createdAt') {
      return b.createdAt - a.createdAt; // Newest first
    } else if (sortBy === 'status') {
      // Completed tasks at the bottom, active at the top
      return a.completed - b.completed;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
        {/* Header component with dark mode toggle */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

        {/* Task input form */}
        <TaskForm addTask={addTask} />

        {/* Filter and Sort controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <FilterButtons currentFilter={filter} setFilter={setFilter} />
          <div className="flex items-center space-x-2">
            <label htmlFor="sort-by" className="text-sm font-medium">Sort by:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="createdAt">Date Created</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Task list */}
        <ul className="space-y-3 mt-6">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No tasks found. Add some!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;