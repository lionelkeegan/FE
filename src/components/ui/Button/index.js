// Import Styled Component
import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    border: none;

    background-color: ${({theme, variant}) => theme.colors[variant] || theme.colors.primary};

    
    // Full Props
    // if props full, set width 100% and display block
    ${({full}) => full && css`
        display: block;
        width: 100%
    `};

    font-size: ${({theme, size}) => theme.sizes.font_size[size] || theme.sizes.font_size.md}rem;
    padding-top: ${({theme, size}) => theme.sizes.padding_y[size] || theme.sizes.padding_y.md}rem;
    padding-bottom: ${({theme, size}) => theme.sizes.padding_y[size] || theme.sizes.padding_y.md}rem;
    padding-left: ${({theme, size}) => theme.sizes.padding_x[size] || theme.sizes.padding_x.md}rem;
    padding-right: ${({theme, size}) => theme.sizes.padding_x[size] || theme.sizes.padding_x.md}rem;

`;

export default Button;
