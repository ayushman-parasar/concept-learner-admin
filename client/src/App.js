import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  function handleClick(){
    axios('/temp',{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res => console.log("client respo"))
  }
  return (
  <>
    <h1>Hello world</h1>
    <button onClick={handleClick}>Click me </button>
  </>)
  }

export default App;
