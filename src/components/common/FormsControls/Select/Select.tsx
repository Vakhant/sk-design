import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { SVGSelectArrow } from '../../../../assets/img/SVGSelectArrow';
import { OptionList } from './OptionList/OptionList';
import { MainFormInputsProps } from '../../../../types/types';

interface SelectProps {
    optionList: Array<{id:string, name:string}>
    readonly: boolean
}


export const Select: FC<MainFormInputsProps & SelectProps> = 
({isValidate, input, meta: {active, touched, error}, id, label, optionList, ...props}) => {
    let [isOptionChousen, setOptionChousen] = useState(false)
    let [selectValue, setSelectValue] = useState("")

    const hasError = touched && error && !isOptionChousen;
    const labelTime = (!touched || !error && !isOptionChousen) && !active;

    return (
        <SelectBox error={error} isValidate={isValidate} active={active} labelTime={labelTime} hasError={hasError}>
            <input {...input} {...props} id={id} value={selectValue} readOnly={true}></input>
            <label htmlFor={id}>{label?label:'От куда узнали про нас?'}</label>
            <SVGSelectArrow active={active}/>
            <OptionList active={active} isOptionChousen={isOptionChousen} optionList={optionList} setSelectValue={setSelectValue} setOptionChousen={setOptionChousen}/>
            {hasError && !active ? <span className='input_error'>{error}</span> : null}
        </SelectBox>
        
    )
}

interface SelectIface {
    hasError: string | boolean
    labelTime: string | boolean
    isValidate: boolean
    active: boolean
    error: string|boolean
}

const SelectBox = styled.div<SelectIface>`
    position: relative;
    font-size: 14px;
    padding: 5px 0;
    padding-bottom: ${({isValidate}) => isValidate ? `25px` : '15px'};
    display: flex;
    flex-direction: column;
    z-index: 5;
    label{
        position: absolute;
        padding: 0 5px;
        font-size: 12px;
        top: -2px;
        left: 5px;
        color: #828282;
        background-color: #fff;
        transition: .3s;
        z-index: 10;
        border-radius: 5px;
        cursor: pointer;
        ${({labelTime}) => labelTime ? `
            font-size: 14px;
            top: 7px;
            left: 7px;
            margin: 16px 5px;
            color: #353238;
        ` : ''}
        ${({active}) => active ? `
            color: #0086A8;
        ` : ''}
  }
  input{
        font-size: 14px;
        border: 2px solid #E3E3E3;
        padding: 16px 15px;
        border-radius: 8px;
        outline: 0;
        color: #353238;
        background-color: transparent;
        z-index: 10;
        cursor: pointer;
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
  ${({hasError, active}) => hasError && !active ? `
    input, input:focus{
        border: 2px solid #EB5E55!important;
    }
    label{
        color: #EB5E55;
            font-size: 14px;
            top: 7px;
            left: 7px;
            margin: 16px 5px;
    }
    span.input_error{
        color: #EB5E55;
        position absolute;
        bottom: 4px;
        left: 17px;
        font-size: 12px;
    }
  ` : ''}
`