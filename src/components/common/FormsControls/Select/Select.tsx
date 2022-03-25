import { FC, useState } from 'react';
import styled from 'styled-components';
import { OptionList } from './OptionList/OptionList';

interface Props {
    input: any
    meta: {
        active: boolean
        touched: boolean
        error: string | false
    }
    disabled?: boolean
    id?: string
    label?: string
    citieslist: Array<{id:string, name:string}>
    readonly: boolean
}
    

export const Select: FC<Props> = ({input, meta: {active, touched, error}, id, label, citieslist, ...props}) => {
    
    
    let [selectFocused, setFocusSelect] = useState(false)
    let [selectValue, setSelectValue] = useState("")
    const hasError = touched && error && !selectFocused;
    console.log(hasError, selectFocused);
    return (<>
        <SelectBox hasError={hasError}>
            <label htmlFor={id}>{label?label:'От куда узнали про нас?'}</label>
            <input {...input} {...props} value={selectValue} readOnly={true}></input>
            <OptionList selectFocused={selectFocused} citieslist={citieslist} setSelectValue={setSelectValue} setFocusSelect={setFocusSelect}/>
            {hasError && <span className='input_error'>{error}</span>}
        </SelectBox>
        </>
        
    )
}

interface SelectIface {
    hasError: string | true| false
}
  
const SelectBox = styled.div<SelectIface>`
  position: relative;
  font-size: 14px;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  label{
      position: absolute;
      padding: 0 5px;
      font-size: 12px;
      top: 0;
      left: 5px;
      color: #828282;
      background-color: #fff;
  }
  input{
      font-size: 14px;
      border: 2px solid #E3E3E3;
      padding: 16px 15px;
      border-radius: 8px;
      outline: 0;
      &:focus{
          border-color: #0086A8;
      };
      &:focus:disabled{
          border-color: #E3E3E3;
          color: #828282;
      };
  }
  input::placeholder{
      color: #E3E3E3;
      font-size: 14px;
  }
  ${({hasError}) => hasError ? `
    input, input:focus{
        border: 2px solid #EB5E55!important;
    }
    label{
        color: #EB5E55;
    }
    span.input_error{
        color: #EB5E55;
    }
  ` : ""}
`
  /* width: ${({width}) => width ? width : "156px"}; */