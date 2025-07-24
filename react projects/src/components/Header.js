import React from 'react';

// Header component with title and dark mode toggle
function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
        My To-Do List
      </h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {/* Sun icon for light mode, Moon icon for dark mode */}
        {isDarkMode ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.591A1 1 0 0115 15a1 1 0 01-1 1h-.091l-.315.315a1 1 0 01-1.414 0l-.315-.315H12a1 1 0 01-1-1v-.091l-.315-.315a1 1 0 010-1.414l.315-.315V12a1 1 0 011-1h.091l.315-.315a1 1 0 011.414 0l.315.315V11a1 1 0 011 1h.091l.315.315a1 1 0 010 1.414l-.315.315zM10 18a1 1 0 01-1 1v1a1 1 0 112 0v-1a1 1 0 01-1-1zm6.364-14.364a1 1 0 010 1.414L15.07 6.414a1 1 0 01-1.414-1.414l1.293-1.293a1 1 0 011.414 0zM3.636 16.364a1 1 0 010-1.414L4.93 13.586a1 1 0 011.414 1.414l-1.293 1.293a1 1 0 01-1.414 0zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm15-1a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4.93 6.414a1 1 0 011.414 0L6.414 4.93a1 1 0 010-1.414L4.93 2.222a1 1 0 01-1.414 1.414l1.293 1.293a1 1 0 010 1.414z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default Header;