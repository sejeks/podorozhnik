import React from 'react';
import Transport from './Transport';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Use this tool to calculate how much money had you spent in this month by transport.</p>
      <p>Also use app <a target='blank' href="https://play.google.com/store/apps/details?id=org.plantainreader&hl=ru" >Plantain reader</a> to see how many times use used you card.</p>

        <Transport typeOfTransport="Метро" basePrice={ 40 } />
        <Transport typeOfTransport="Наземный" basePrice={ 35 } />
      </header>
    </div>
  );
}

export default App;
