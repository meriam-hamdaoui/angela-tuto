import React from 'react';
import './App.css';
import Foot from './components/Foot/Foot';
import Head from './components/Head/Head';
import Note from './components/Notes/Note';

function App() {
  // const user = "souad";
  // var num = 10;
  return (
    <div className="App">
      <Head />
      <Note />
      <Foot />
      {/* <h1>This is heading</h1>
        <ul>
            this is a list
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul> */}
        {/* using template literale to render a dynamic value */}
        {/* <p>{user} s random number is {Math.floor(Math.random() * 10)}</p> */}        
    </div>
  );
}

export default App;
