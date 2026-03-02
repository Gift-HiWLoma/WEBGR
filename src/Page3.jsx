import React, { useState } from 'react';

const Page3 = () => {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    setFlipping(true);
    setResult(null);
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? 'Heads' : 'Tails');
      setFlipping(false);
    }, 600);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
      <h1 className="text-3xl font-bold mb-6">Coin Flipper</h1>
      
      <div className="flex flex-col items-center gap-8">
        <div className={`w-48 h-48 rounded-full border-8 flex items-center justify-center text-2xl font-black uppercase transition-all duration-300 ${
          flipping ? 'animate-bounce bg-gray-200 border-gray-300' : 
          result === 'Heads' ? 'bg-yellow-100 border-yellow-500 text-yellow-700' :
          result === 'Tails' ? 'bg-gray-100 border-gray-500 text-gray-700' :
          'bg-gray-50 border-gray-200 text-gray-300'
        }`}>
          {flipping ? '?' : result || 'Flip!'}
        </div>

        <button 
          onClick={flipCoin}
          disabled={flipping}
          className="bg-gray-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {flipping ? 'Flipping...' : 'Flip Coin'}
        </button>
      </div>
    </div>
  );
};

export default Page3;
