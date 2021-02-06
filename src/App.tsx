import React from 'react';
import {RandomCard} from 'components/RandomCard/RandomCard';
import './App.css';

const data: {name: string}[] = [
  {name: "erifranck"},
  {name: "kleydith"},
  {name: "kerlianna"},
  {name: "anthoner"},
  {name: "eloy"},
  {name: "odalis"},
  {name: "enrique"},
]

function App() {
  return (
    <div className="App">
      <RandomCard
        data={data}
        render={(data: {name?: string}) => (
          <div>
            {data.name}
          </div>
        )} />
    </div>
  );
}
export default App;
