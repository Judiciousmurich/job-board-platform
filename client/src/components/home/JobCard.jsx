import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const JobCard = ({ job }) => {
  const {
    id,
    title,
    company,
    companyLogo,
    location,
    salary,
    jobType,
    postedAt,
    isRemote
  } = job;

  // Calculate time ago
  const getTimeAgo = (dateString) => {
    const now = new Date();
    const postedDate = new Date(dateString);
    const diffInMs = now - postedDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      const months = Math.floor(diffInDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-start">
          <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
            {companyLogo ? (
              <img src={companyLogo} alt={`${company} logo`} className="w-full h-full object-contain" />
            ) : (
              <span className="text-gray-400 text-lg">{company.charAt(0)}</span>
            )}
          </div>
          <div className="ml-4 flex-grow">
            <Link to={`/jobs/${id}`} className="block">
              <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600">
                {title}
              </h3>
            </Link>
            <Link to={`/companies/${company.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-blue-600">
              {company}
            </Link>
            
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {isRemote ? 'Remote' : location}
              </div>
              
              {salary && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {salary}
                </div>
              )}
              
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {jobType}
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block text-right ml-4">
            <span className="text-xs text-gray-500">{getTimeAgo(postedAt)}</span>
            <button className="mt-1 text-gray-400 hover:text-blue-600" aria-label="Save job">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center rounded-b-lg">
        <Link to={`/jobs/${id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View Details
        </Link>
        <Button to={`/jobs/${id}/apply`} variant="primary" size="sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;