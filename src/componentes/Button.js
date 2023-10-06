import styled , {css}from "styled-components"

const Button = styled.button`
      display: inline-block;
      color: ${props => props.inputColor };
      background-color: ${props => props.backgroundColor || "transparent"};
      width: ${props => props.btnwidth || 'auto'};
      height: ${props => props.height || 'auto'};

      font-size:${props=> props.fontSize};
      font-family: 'Source Sans Pro', sans-serif;

      margin-right: ${props => props.marginR  || '0'};
      margin-left: ${props=>props.ml || '0'};
      border: 2px solid ${props =>props.bordercolor};
      border-radius: 9px;
      display: block;

      ${props => css`
         @media (max-width: ${props.theme.breakpoints.laptop}) {
            display:${props=> props.display};
            
         ` }

`;

export default Button
