import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:block ml-10">
              <SearchBar placeholder="Job titles, skills, or companies" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-gray-600 hover:text-blue-600">
              Companies
            </Link>
            <div className="border-l border-gray-300 h-6 mx-2"></div>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Button variant="primary" to="/register">
              Sign Up
            </Button>
            <Button variant="outline" to="/post-job">
              Post a Job
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <SearchBar placeholder="Search jobs..." />
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link to="/jobs" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Find Jobs
              </Link>
              <Link to="/companies" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Companies
              </Link>
              <Link to="/login" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Login
              </Link>
              <Link to="/register" className="px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Sign Up
              </Link>
              <Link to="/post-job" className="px-3 py-2 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50">
                Post a Job
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;