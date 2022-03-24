import './App.css';
import Button from './components/Button';
import { useState } from 'react';


const App = () => {

  let [portionNumber, setPortionNumber] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
          <Button width="440px" disabled={false} loading={portionNumber} text={"Пример текста"}/>
          <button onClick={() => setPortionNumber(!portionNumber)}>trigger</button>
      </header>
    </div>
  );
}

export default App;
