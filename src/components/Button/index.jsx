import React from 'react'
import { StyledButton } from "./styled"
const Button = (props) => {
  return (
    <StyledButton 
        fullWidth={props.fullWidth} 
        type={props.type} 
        disabled={props.disabled}
        size={props.size}
      >
        {props.children}
    </StyledButton>
  )
}

export default Button