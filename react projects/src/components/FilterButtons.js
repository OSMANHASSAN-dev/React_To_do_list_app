import React from 'react';

// FilterButtons component to change task visibility
function FilterButtons({ currentFilter, setFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex space-x-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200
            ${currentFilter === f
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
          `}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;