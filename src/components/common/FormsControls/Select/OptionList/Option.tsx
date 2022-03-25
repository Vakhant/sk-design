import { FC } from 'react';
import styled from 'styled-components';

interface Props {
    id?: string
    name?: string
    setSelectValue: any
    setFocusSelect: any
}

export const Option: FC<Props> = ({id, name, setSelectValue, setFocusSelect}) => {
    return (
        <OptionBox id={id} name={name} onMouseDown={()=>{setSelectValue(name); setFocusSelect(true)}}>
            {name}
        </OptionBox>
    )
}

interface OptionBoxIface {
    id?: string
    name?: string
}

const OptionBox = styled.div<OptionBoxIface>`
    ${({name})=>name?name:''}
`