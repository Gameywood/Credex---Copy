import React from 'react';

 function DarkModeToggle({ toggle }) {
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded shadow"
    >
      Toggle Mode
    </button>
  );
}

export default DarkModeToggle;