import './App.css';
import { useState } from 'react';
import FormConteinerWrap from './components/Form/FormContainer';
import styled from 'styled-components';
import { TextBlock } from './components/TextBlock/TextBlock';


const App = () => {


  return (
    <div className="App">
      <Wrap>
          <TextBlock/>
          <FormConteinerWrap/>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  width: 1440px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  margin: 0 auto;
`

export default App;
