import './App.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 20) {
      setMultiplier(multiplier * 5);
      setCount(count - 20);
    }
  }

  const buyFullFeast = () => {
    if (count >= 30) {
      setMultiplier( multiplier * 15);
      setCount(count - 30);
    }
  }
  
  
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://wallpapers.com/images/featured-full/samosa-png-h6porf9uuoxije6w.png" onClick={updateCount}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Upg 1</h3>
          <p>2x click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Upg 2</h3>
          <p>5x click</p>
          <button onClick={buyPartyPack}>20 samosas</button>        
        </div>
        <div className="upgrade">
          <h3>Upg 3</h3>
          <p>15x click</p>
          <button onClick={buyFullFeast}>30 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
