import { FC } from 'react';
import styled from 'styled-components';

interface Props {
    name: string
    setSelectValue: any
    setOptionChousen: any
}

export const Option: FC<Props> = ({ name, setSelectValue, setOptionChousen}) => {
    return (
        <OptionBox onMouseDown={()=>{setSelectValue(name); setOptionChousen(true)}}>
            {name}
        </OptionBox>
    )
}

const OptionBox = styled.div`
    border-bottom: 2px solid #E3E3E3;
    padding: 5px;
    cursor: pointer;
    background-color: #fff;
    transition: .1s;
    &:hover{
        background-color: #FAFAFA;
    }
    &:last-child{
        border-bottom: 0;
    }
`