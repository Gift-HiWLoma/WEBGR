import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Page from './Page.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8 items-center">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                My App Tool
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/dice" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Dice Roller</Link>
                  <Link to="/color" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Color Picker</Link>
                  <Link to="/coin" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Coin Flip</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dice" element={<Page />} />
            <Route path="/color" element={<Page2 />} />
            <Route path="/coin" element={<Page3 />} />
          </Routes>
        </main>
        
        <footer className="py-8 bg-white border-t border-gray-200">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            By 66112077 Kanakan Sricum
          </p>
        </div>
      </footer>
      </div>
    </Router>
    
  );
};

export default App;
