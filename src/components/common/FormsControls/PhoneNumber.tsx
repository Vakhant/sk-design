import { FC } from 'react'
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
import { MainFormInputsProps } from '../../../types/types';

interface PhoneNumberProps {placeholder?: string}


export const PhoneNumber: FC<MainFormInputsProps&PhoneNumberProps> = 
({isValidate, input, meta: {touched, error}, id, placeholder, label, ...props}) => {
    const hasError = touched && error;
    const labelTime = !touched || hasError;
    return (
        <PhoneNumberBox isValidate={isValidate} labelTime={labelTime} hasError={hasError}>
            <ReactInputMask  {...input} {...props} placeholder={placeholder?placeholder:'Пример текста'} {...props} mask="+7\ (999) 999-99-99"/>
            <label htmlFor={id}>{label?label:'Пример текста'}</label>
            {hasError && <span className='input_error'>{error}</span>}
        </PhoneNumberBox>
    )
}

interface PhoneNumberIface {
    labelTime: string | boolean
    hasError: string|boolean
    isValidate: boolean
  }
  
const PhoneNumberBox = styled.div<PhoneNumberIface>`
    position: relative;
    font-size: 14px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    padding-bottom: ${({isValidate}) => isValidate ? `25px` : '15px'};
    label{
        position: absolute;
        top: 0;
        left: 5px;
        background-color: #fff;
        color: #828282;
        padding: 0 5px;
        font-size: 12px;
        border-radius: 5px;
        transition: .3s;
        z-index: 10;
        border-radius: 5px;
        cursor: pointer;
    }
    input{
        font-size: 14px;
        border: 2px solid #E3E3E3;
        padding: 16px 15px;
        border-radius: 8px;
        outline: 0;
        width: calc(100% - 34px);
        color: #353238;
        &:focus{
            border-color: #0086A8;
            +label{
                color: #0086A8;
            }
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
            position absolute;
            bottom: 4px;
            left: 17px;
            font-size: 12px;
        }
    ` : ""}
`
  /* width: ${({width}) => width ? width : "156px"}; */