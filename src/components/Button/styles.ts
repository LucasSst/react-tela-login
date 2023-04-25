import styled from 'styled-components';
import { IButtonStyles } from './types';


export const ButtonContainer = styled.button<IButtonStyles | any>`
    width: 100%;
    height: 42px;
    background-color: #25859d;
    color: #FFF;

    

    border: 1px solid #25859d;
    border-radius: 21px;
    pointer-events:${({pointer} ) => pointer};
    cursor:${({cursor} ) => cursor};
    &:hover {
        opacity: 0.6;
        
    }
`