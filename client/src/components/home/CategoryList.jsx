import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Technology', count: 1245, icon: '💻' },
  { id: 2, name: 'Marketing', count: 850, icon: '📱' },
  { id: 3, name: 'Healthcare', count: 930, icon: '🏥' },
  { id: 4, name: 'Finance', count: 720, icon: '💰' },
  { id: 5, name: 'Education', count: 510, icon: '🎓' },
  { id: 6, name: 'Design', count: 480, icon: '🎨' },
  { id: 7, name: 'Customer Service', count: 645, icon: '🤝' },
  { id: 8, name: 'Remote', count: 1320, icon: '🏠' }
];

const CategoryList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <p className="mt-2 text-gray-600">
            Find the perfect job in your field of expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/jobs?category=${category.name.toLowerCase()}`}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">{category.icon}</span>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.count} jobs</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/categories" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            View all categories
            <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;