import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const tools = [
    { name: 'Virtual Dice Roller', path: '/dice', desc: 'Roll 1-100 D6 dice', color: 'bg-blue-500' },
    { name: 'Color Picker', path: '/color', desc: 'Pick and copy colors', color: 'bg-green-500' },
    { name: 'Coin Flipper', path: '/coin', desc: 'Flip for heads or tails', color: 'bg-yellow-500' },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to My App Tool</h1>
      <p className="text-gray-600 mb-12">Choose a tool below to get started.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.path} 
            to={tool.path}
            className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
          >
            <div className={`w-12 h-12 ${tool.color} rounded-lg mb-4`} />
            <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
            <p className="text-gray-500 mt-2">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
