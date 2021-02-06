import React from 'react';
import logo from './logo.svg';
import {RandomCard} from 'components/RandomCard/RandomCard';
import './App.css';

const data = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

function App() {
  return (
    <div className="App">
      <RandomCard data={data} />
    </div>
  );
}

export default App;
