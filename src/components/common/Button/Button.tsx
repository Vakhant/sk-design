import { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import logo from './loader.gif';

interface Props {
  width?: string | undefined
  text: string
  disabled: boolean
  reset?: any
}
const Button: FC<Props> = ({reset, width, disabled, text}) => {
  let [loading, setLoading] = useState(false)
  let onBtnClick=()=>{
    setTimeout(()=>{setLoading(true)}, 0)
    setTimeout(()=>{reset(); setLoading(false)}, 2000)}
  return <ButtonBox onClick={onBtnClick} width={width} loading={loading} disabled={disabled||loading}>
            {loading ? <img width="30px" src={logo} alt="loading..." /> : text}
        </ButtonBox>
}

export default Button

interface ButtonBoxIface {
  width: string | undefined
  loading: boolean
}

const ButtonBox = styled.button<ButtonBoxIface>`
  font-size: 14px;
  height: 50px;
  width: ${({width}) => width ? width : "156px"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  outline: 0;
  border: none;
  transition: .3s;
  background-color: #0086A8;
  color: #fff;
  &:hover{
    background-color: #007693;
    cursor: pointer;
  };
  &:active{
    background-color: #00657E;
  };
  &:disabled{
    background-color: #E3E3E3;
    color: #828282;
    cursor: initial
  };
  ${({loading}) => loading && `background-color: #0086A8!important; color: #fff!important;`};
`