import { FC } from 'react'
import styled from 'styled-components';

interface Props {
    input: {}
    meta: {
        touched: boolean
        error: string | false
    }
    disabled?: boolean
    id?: string
    placeholder?: string
    label?: string
}
    

export const Input: FC<Props> = ({input, meta: {touched, error}, id, placeholder, label, ...props}) => {
    const hasError = touched && error;
    return (
        <InputBox hasError={hasError}>
            <label htmlFor={id}>{label?label:'Пример текста'}</label>
            <input {...input} {...props} placeholder={placeholder?placeholder:'Пример текста'}></input>
            {hasError && <span className='input_error'>{error}</span>}
        </InputBox>
    )
}

interface InputIface {
    hasError: string | false
  }
  
const InputBox = styled.div<InputIface>`
  position: relative;
  font-size: 14px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  label{
      position: absolute;
      top: 0;
      left: 10px;
      background-color: #fff;
      color: #828282;
      padding: 0 5px;
      font-size: 12px;
  }
  input{
      font-size: 14px;
      border: 2px solid #E3E3E3;
      padding: 16px 15px;
      border-radius: 8px;
      outline: 0;
      width: 300px;
      &:focus{
          border-color: #0086A8;
      };
      &:disabled{
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
        border: 2px solid #EB5E55;
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