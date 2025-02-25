// import React from 'react';
// import { Link } from 'react-router-dom';
// import JobCard from './JobCard';

// // Sample job data
// const featuredJobs = [
//   {
//     id: 1,
//     title: 'Senior Frontend Developer',
//     company: 'TechCorp',
//     companyLogo: '/assets/images/companies/techcorp.svg',
//     location: 'San Francisco, CA',
//     isRemote: true,
//     salary: '$120k - $150k',
//     jobType: 'Full-time',
//     postedAt: '2025-02-20T12:00:00Z'
//   },
//   {
//     id: 2,
//     title: 'Marketing Manager',
//     company: 'BrandCo',
//     companyLogo: '/assets/images/companies/brandco.svg',
//     location: 'New York, NY',
//     isRemote: false,
//     salary: '$90k - $110k',
//     jobType: 'Full-time',
//     postedAt: '2025-02-18T10:30:00Z'
//   },
//   {
//     id: 3,
//     title: 'UX Designer',
//     company: 'DesignHub',
//     companyLogo: '/assets/images/companies/designhub.svg',
//     location: 'Austin, TX',
//     isRemote: false,
//     salary: '$100k - $130k',
//     jobType: 'Full-time',
//     postedAt: '2025-02-22T15:45:00Z'
//   },
//   {
//     id: 4,
//     title: 'Data Scientist',
//     company: 'AnalyticsPro',
//     companyLogo: null,
//     location: 'Seattle, WA',
//     isRemote: true,
//     salary: '$130k - $160k',
//     jobType: 'Full-time',
//     postedAt: '2025-02-21T09:15:00Z'
//   }
// ];

// const FeaturedJobs = () => {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//               Featured Jobs
//             </h2>
//             <p className="mt-2 text-gray-600">
//               Handpicked opportunities for you
//             </p>
//           </div>
//           <Link to="/jobs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//             View all jobs
//             <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featuredJobs.map(job => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedJobs;

// // src/components/jobs/JobFilters.jsx
// import React, { useState } from 'react';
// import Button from '../common/Button';

// const JobFilters = ({ onApplyFilters }) => {
//   const [filters, setFilters] = useState({
//     jobType: [],
//     experience: [],
//     salary: [],
//     remote: false
//   });

//   const handleCheckboxChange = (category, value) => {
//     setFilters(prev => {
//       if (category === 'remote') {
//         return { ...prev, remote: !prev.remote };
//       }
      
//       const updated = { ...prev };
//       if (updated[category].includes(value)) {
//         updated[category] = updated[category].filter(item => item !== value);
//       } else {
//         updated[category] = [...updated[category], value];
//       }
//       return updated;
//     });
//   };

//   const handleApplyFilters = () => {
//     if (onApplyFilters) {
//       onApplyFilters(filters);
//     }
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       jobType: [],
//       experience: [],
//       salary: [],
//       remote: false
//     });
//   };

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//       <div className="p-4 border-b border-gray-200">
//         <h3 className="font-medium text-gray-900">Filters</h3>
//       </div>
      
//       <div className="p-4 border-b border-gray-200">
//         <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
//         <div className="space-y-2">
//           {['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'].map(type => (
//             <div key={type} className="flex items-center">
//               <input
//                 id={`job-type-${type.toLowerCase()}`}
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 checked={filters.jobType.includes(type)}
//                 onChange={() => handleCheckboxChange('jobType', type)}
//               />
//               <label htmlFor={`job-type-${type.toLowerCase()}`} className="ml-2 text-sm text-gray-700">
//                 {type}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* <div className="p-4 border-b border-gray-200">
//         <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
//         <div className="space-y-2">
//           {['Entry level', 'Mid level', 'Senior level', 'Director', 'Executive'].map(level => (
//             <div key={level} className="flex items-center">
//               <input
//                 id={`experience-${level.toLowerCase().replace(/\s+/g, '-')}`}
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 checked={filters.experience.includes(level)}
//                 onChange={() => handleCheckboxChange('experience', level)}
//                */}