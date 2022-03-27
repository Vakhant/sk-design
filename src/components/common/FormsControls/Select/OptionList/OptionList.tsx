import { FC, useState } from 'react';
import styled from 'styled-components';
import { Option } from './Option';


interface Props {
    active: boolean
    isOptionChousen: any
    optionList: Array<{id:string, name:string}>
    setSelectValue: any
    setOptionChousen: any
}


export const OptionList: FC<Props> = ({active, optionList, isOptionChousen, setSelectValue, setOptionChousen}) => {
    
    return (
        <OptionListBox active={active} optionList={optionList} isOptionChousen={isOptionChousen} >
                {/* {active?"true":"false"} */ console.log(optionList)}
                {optionList.map(option=> 
                <Option 
                setOptionChousen={setOptionChousen}
                setSelectValue={setSelectValue}
                key={option.id}
                name={option.name}
                />)
            }
         </OptionListBox>
    )
}

interface OptionListIface {
    active: boolean
    isOptionChousen: any
    optionList: Array<{id:string, name:string}>
}
  
const OptionListBox = styled.div<OptionListIface>`
    position: absolute;
    width: 100%;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 8px;
    border: 2px solid #E3E3E3;
    top: 60px;
    box-shadow: 0 20px 30px rgba(0,0,0,.2);
    z-index: 5;
    ${({active}) => active ? `
        opacity: 1;
        visibility: visible;
        transition: top .3s 0s, opacity .3s 0s, visibility 0s 0s;
    ` : `
        opacity: 0;
        visibility: hidden;
        transition: top .3s 0s, opacity .3s 0s, visibility 0s .3s;
    `}
`