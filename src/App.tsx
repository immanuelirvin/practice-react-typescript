import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test/Test';

function App() {

  console.log("Hallo");
  let name = "Irvin";
  let isTrue = true;
  let number = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.<br/>
          {name}
          {isTrue ? "Hai" : "Hallo"}
        </p>
       <Test number={number} />
      </header>
    </div>
  );
}

export default App;
