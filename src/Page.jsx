import React, { useState, useEffect } from 'react';

const Page = () => {
  const [count, setCount] = useState(1);
  const [dice, setDice] = useState([]);

  const rollDice = () => {
    const newDice = Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1);
    setDice(newDice);
  };

  // Initial roll on load
  useEffect(() => {
    rollDice();
  }, []);

  const total = dice.reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
      <h1 className="text-3xl font-bold mb-6">Virtual Dice Roller</h1>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Number of Dice (1-100)</label>
          <input 
            type="number" 
            min="1" 
            max="100" 
            value={count} 
            onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
            className="border border-gray-300 rounded-lg px-4 py-2 w-32 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <button 
          onClick={rollDice}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Roll Dice
        </button>
      </div>

      <div className="mb-4 text-lg font-semibold">
        Total Sum: <span className="text-indigo-600">{total}</span>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
        {dice.map((val, i) => (
          <div key={i} className="aspect-square flex items-center justify-center border-2 border-gray-200 rounded-lg text-xl font-bold bg-gray-50">
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
