import './App.css';
import React, { useState, useEffect } from 'react';
import { useStore } from './context/globalState';
// import ChildComponent from './child'
import { loadBlockchain } from './store/asyncAction'
function App() {

  const [{ post, web3 }, dispatch] = useStore();

  const [value, setValue] = useState()


  console.log("post", post)
  console.log("value", value)

  console.log("app web3", web3)

  const handleSubmit = () => {
    loadBlockchain(dispatch)
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Load Web3</button>
    </div>
  );
}

export default App;
