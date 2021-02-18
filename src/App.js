import React from 'react';
const api = {
  key: '038c8f378edc18025c2f0ec0d424c17f',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>

        <div>
          <div className='location-box'>
            <div className='location'>New York City, USA</div>
            <div className='date'>{dateBuilder(new(Date()))}</div>
          </div>
        </div>
      </main>
    </div>
    
  );
}

export default App;
