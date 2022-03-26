import React, { FC } from "react";
import styled from 'styled-components';

interface Props {
    active:boolean
}

export const SVGSelectArrow: FC<Props> = ({active}) => <SVGSelectArrowBox active={active}><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.27439 5.5864L9.88692 0.96111C10.038 0.809567 10.0377 0.564217 9.88613 0.412928C9.73459 0.261757 9.4891 0.262148 9.33795 0.41371L4.99995 4.76369L0.661973 0.413553C0.5108 0.262011 0.265468 0.26162 0.113905 0.412772C0.0379276 0.488612 -6.10352e-05 0.587967 -6.10352e-05 0.687322C-6.10352e-05 0.786423 0.037674 0.885387 0.113123 0.96109L4.72554 5.5864C4.79815 5.65939 4.89698 5.70035 4.99995 5.70035C5.10292 5.70035 5.20163 5.65927 5.27439 5.5864Z" fill="#353238"/>
</svg></SVGSelectArrowBox>

const SVGSelectArrowBox = styled.div<Props>`
    position: absolute;
    top: 31px;
    transform: translate(0, -50%);
    transition: .3s;
    right: 15px;
    cursor: pointer;
    ${({active}) => active ? `
        transform:  rotate(180deg) translate(0,5px);
    ` : ''}
`