import { FC, useState } from 'react';
import styled from 'styled-components';
import { Option } from './Option';

interface Props {
    selectFocused: any
    citieslist: Array<{id:string, name:string}>
    setSelectValue: any
    setFocusSelect: any
}    

export const OptionList: FC<Props> = ({citieslist, selectFocused, setSelectValue, setFocusSelect}) => {
    return (
        <OptionListBox citieslist={citieslist} selectFocused={selectFocused} >
                {selectFocused?"true":"false"}
                {citieslist.map(option=> 
                <Option 
                setFocusSelect={setFocusSelect}
                setSelectValue={setSelectValue}
                key={option.id}
                id={option.id}
                name={option.name}
                />)
            }
         </OptionListBox>
    )
}

interface OptionListIface {
    selectFocused: boolean
    citieslist: Array<{id:string, name:string}>
}
  
const OptionListBox = styled.div<OptionListIface>`
    
`