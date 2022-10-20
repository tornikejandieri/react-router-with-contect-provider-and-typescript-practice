import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First';

export const textContext = createContext('')

function App() {

  const [text, setText] = useState<string>('this text should go into the third component')
  return (
    <textContext.Provider value={text}>
      <div className="App">
        <First />
      </div>
    </textContext.Provider>
    
  );
}

export default App;
