import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First';


function App() {
  const [text, setText] = useState('this text should go to the third component')
  return (
    <div className="App">
      <First text={text}/>
    </div>
  );
}

export default App;
