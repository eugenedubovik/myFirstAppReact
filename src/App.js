import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function Button(props){

 const callOnUserClick= () => {
    props.onUserClick()
  }

  return <button className="App-button" onClick={callOnUserClick } style={{backgroundColor: props.color}}>{props.children} </button>
}


function App() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])

  const addText = () => {
   setData(data.concat([inputValue]))
   setInputValue('')
  
  }
  
  const clearInput = (inputValue) =>{
    setInputValue('')
  }
  const clearData = (data) => {
    setData([])
    setInputValue('')
  }

  return (
    <div className="App">
      <input onChange={(e)=>{
        setInputValue(e.target.value)
      }} value={inputValue}  />
      <Button onUserClick={addText} color="green"> Add</Button>
      <Button onUserClick={clearInput} color="red"> Clear input</Button>
      <Button onUserClick={clearData} color="yellow"> Clear data</Button>
      <ul>
          { 
            data.map(text => {
              return <li>{text}</li>
            })

          }
      </ul>
      
    </div>
  );
}

export default App;
