import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="app">
        <div className='data'>
        <svg viewBox="0 0 500 236">
          <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"></path>
        </svg>
          <Navbar />
        </div>
        {/* <path d="M3,401 C240,530 400,100 596,282" /> */}
      </div>
    </>
  );
}

export default App;
