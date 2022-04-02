import React from 'react';
import './App.css';
// import Foot from './components/Foot/Foot';
// import Head from './components/Head/Head';
// import Note from './components/Notes/Note';
import Contacts from './components/propos/Contacts';
import Card from './components/propos/Card';

function App() {
  // const user = "souad";
  // var num = 10;
  return (
  <div className='App'>
    <h1>Contact List</h1>
    <div className='contact-grid'>
      <Card name= {Contacts[0].name}
              img={Contacts[0].imgURL}
              phone={Contacts[0].phone}
              email={Contacts[0].email}/>
      <Card name= {Contacts[1].name}
              img={Contacts[1].imgURL}
              phone={Contacts[1].phone}
              email={Contacts[1].email}/>
      <Card name= {Contacts[2].name}
              img={Contacts[2].imgURL}
              phone={Contacts[2].phone}
              email={Contacts[2].email}/>
      <Card name= {Contacts[3].name}
              img={Contacts[3].imgURL}
              phone={Contacts[3].phone}
              email={Contacts[3].email}/>
    </div>
  </div>
  );
}





     
     {/*<div className="App"> <Contacts /> */
      /* <Head />
      <Note />
      <Foot /> */
      /* <h1>This is heading</h1>
        <ul>
            this is a list
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul> */
        /* using template literale to render a dynamic value */
        /*  <p>{user} s random number is {Math.floor(Math.random() * 10)}</p> </div>*/}        
     

export default App;
