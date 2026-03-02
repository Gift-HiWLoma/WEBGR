import React, { useState } from 'react';

const Page2 = () => {
  const [color, setColor] = useState('#4f46e5');

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
      <h1 className="text-3xl font-bold mb-6">Color Picker</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div 
          className="w-full md:w-64 h-64 rounded-2xl shadow-inner border border-gray-200"
          style={{ backgroundColor: color }}
        />
        
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Color</label>
            <input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
              className="w-20 h-20 block cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-gray-400 uppercase">Hex Code</span>
              <p className="text-xl font-mono font-bold">{color.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
