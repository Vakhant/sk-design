// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';


const App = () => {

  let [portionNumber, setPortionNumber] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
          <Button width={portionNumber ? "100%" : ""} text={portionNumber ? "true" : "false"}/>
          <button onClick={() => setPortionNumber(!portionNumber)}>trigger</button>
      </header>
    </div>
  );
}

export default App;
