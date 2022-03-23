import { FC } from 'react'
import styled, { css } from 'styled-components'

enum ButtonViewStatesEnum {
  default = 'default',
  hover = 'hover',
  active = 'active',
  disable = 'disable',
  loading = 'loading',
}

interface ButtonContainerIface {
  width: null | string
  ButtonViewState: ButtonViewStatesEnum
}

const ButtonContainer = styled.button<ButtonContainerIface>`
  font-size: 14px;
  box-sizing: border-box;
  padding: 18px 20px;
  border-radius: 8px;
  outline: 0;
  border: none;
  width: ${({width}) => width ? width : "156px"};
  ${({ButtonViewState = ButtonViewStatesEnum.default}) => { 
      switch (ButtonViewState) {
        case ButtonViewStatesEnum.default:
          return css`
            background-color: #0086A8;
            color: #fff;
          `
        case ButtonViewStatesEnum.hover:
          return css`
            background-color: #007693;
            color: #fff;
            cursor: pointer;
          `
        case ButtonViewStatesEnum.active:
          return css`
            background-color: #00657E;
            color: #fff;
          `
        case ButtonViewStatesEnum.disable:
          return css`
            background-color: #E3E3E3;
            color: #828282;
          `
        case ButtonViewStatesEnum.loading:
          return css`
            background-color: #0086A8;
            color: #fff;
          `
      }
    }
  };
`

interface Props {
    width: string
    text: string
}


const Button: FC<Props> = ({width, text}) => {
  return (
      <>
        <ButtonContainer width={width} ButtonViewState={ButtonViewStatesEnum.disable}>
            {text}
        </ButtonContainer>
      </>
    )
}

export default Button
