import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="menu">
          <img src="/Page_Icons/hambDrop.png" className="Menu-Dropimg" alt="menu" />
        </div>
        <div className='Search-Menu'>
          <input type="search" placeholder='Search Players or Champions' className='Search-Bar' />
        </div>
        <div className='Home-Page-Link'>
          <img src="/Page_Icons/Rydu smaller.png" alt="Homepage Button" className='Rydu-Header-Logo' />
        </div>

      </header>
      <body className='Page-Body'>

      </body>
    </div>
  );
}

export default App;
