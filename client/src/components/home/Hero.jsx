import React from 'react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="bg-blue-600 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Find your dream job today
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-8">
            Search through thousands of job listings from top companies
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-grow">
                <SearchBar 
                  placeholder="Job title, skills, or company" 
                  showButton={false}
                />
              </div>
              <div className="flex-grow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Location"
                  />
                </div>
              </div>
              <Button variant="primary" type="submit" className="py-2 px-6">
                Search Jobs
              </Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Popular:</span>
              <a href="#" className="text-sm text-blue-600 hover:underline">Remote</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Software Engineer</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Data Scientist</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Marketing</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Part-time</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
