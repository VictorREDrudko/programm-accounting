import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Classification } from './layout/section/classification/Classification';
import { Footer } from './layout/footer/Footer';
import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/main/Main';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        {/* <Classification/> */}
    </div>
  );
}

export default App;
