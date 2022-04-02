import App from './App';
import App1 from './components/template/App1';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// var React = require('react');old way
import ReactDOM from 'react-dom';
import Styling from './components/styling/Styling';
import Greeting from './components/greeting/Greeting';
import Heading from './components/component/Heading';
// var ReactDOM = require('react-dom'); old way


// ReactDOM.render(what to show, where to show, callback function)
ReactDOM.render(
    <div className='body'>
        <Heading />
        <h1 className='h1'>introduction to react js</h1>
        <App />
        <h1 className='h1'>template literal and dynamic variable</h1>
        <App1 />
        <h1 className='h1'>the three ways to style html element in jsx</h1>
        <Styling />
        <h1 className='h1'>practice so far on</h1>
        <Greeting /> 
    </div>    
    ,document.getElementById('root'));

// the ReactDom function replace the following lines
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello world';
// document.getElementById('root').append(h1);