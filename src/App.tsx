import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First';

import Counter from './Counter';

export interface IContext {
  text: string,
}

export const MyContext = createContext<IContext>({
  text: 'This text goes into the third component.'
})

export const text: IContext = { text: 'This text goes into the third component.'}

function App() {
  return (
    <MyContext.Provider value={text}>
      <div className="App">
        <First />
      </div>
    </MyContext.Provider>
  );
}

export default App;
