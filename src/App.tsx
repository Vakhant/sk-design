import './App.css';
import Button from './components/common/Button/Button';
import { FC, useState } from 'react';
import FormReduxForm from './components/Form/Form';


const App = () => {

  let [portionNumber, setPortionNumber] = useState(false)

  let onSubmit = () => console.log('sdfsd')
  

  return (
    <div className="App">
      <header className="App-header">
          {/* <Button width="440px" disabled={false} loading={portionNumber} text={"Пример текста"}/> */}
          <FormReduxForm onSubmit={onSubmit}/>
          <button onClick={() => setPortionNumber(!portionNumber)}>trigger</button>
      </header>
    </div>
  );
}


export default App;
