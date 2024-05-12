import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Classification } from './layout/section/classification/Classification';

function App() {
  return (
    <div className="App">
      <Header/>
      <Classification/>
    </div>
  );
}

export default App;
