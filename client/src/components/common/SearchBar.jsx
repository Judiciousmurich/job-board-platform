import React from 'react';

const SearchBar = ({ 
  placeholder = 'Search...', 
  value = '', 
  onChange,
  onSubmit,
  buttonText = 'Search',
  showButton = true,
  className = ''
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-full ${className}`}>
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-full bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {showButton && (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText}
        </button>
      )}
    </form>
  );
};

export default SearchBar;