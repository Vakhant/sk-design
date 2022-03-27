import './App.css';
import Button from './components/common/Button/Button';
import { FC, useState } from 'react';
import FormConteinerWrap from './components/Form/FormContainer';


const App = () => {

  let [portionNumber, setPortionNumber] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
          {/* <Button width="440px" disabled={false} loading={portionNumber} text={"Пример текста"}/> */}
          <FormConteinerWrap/>
          <button onClick={() => setPortionNumber(!portionNumber)}>trigger</button>
      </header>
    </div>
  );
}


export default App;
