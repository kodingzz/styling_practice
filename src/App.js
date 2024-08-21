
import Header from './components/Header';
import AuthInputs from './components/AuthInputs';
import { useState } from 'react';
import {styled } from 'styled-components';



function App() {
  const [pColor,setPColor] =useState('white');
  return (
    <div>
        <p style={{color:pColor}}>Style me!</p>
        <button onClick={()=>setPColor(prevColor=>prevColor==='white' ? prevColor='red' :prevColor='white')}>Toggle style</button>
        <Header/>
        <AuthInputs/>
    </div>
  );
}

export default App;
