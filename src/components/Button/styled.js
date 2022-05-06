import styled from "styled-components";

const ButtonBase = styled.button.attrs(() => ({
  type: "button",
}))`
  font-size: 16px;
  margin: 10px;
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const StyledButton = styled(ButtonBase)`
  ${(props) => {
    switch (props.typeButton) {
      case "secondary":
        return `
                background-color : #fff;
                color: #FF0000;
                border: 1px solid #FF0000;
                &:hover{
                    border-color : rgba(255, 0, 0, 0.7);
                }
                &:active, &:focus{
                    border-color :  #C20000;
                    color:#C20000;    
                }    

                &:disabled{
                    border-color :  #999999;
                    color :#999999;
                }
            `;
      case "gray":
        return `
                background-color : #524d4d;
                &:hover{
                    background-color : rgb(180,132,132);
                }
                &:active, &:focus{
                    background-color : #C20000;
                    color:#fff;    
                }    
                &:disabled{
                    background-color :  #999999;
                }  
            `;
      default:
        return `
                background-color : #FF0000;
                &:hover{
                    background-color :  rgba(255, 0, 0, 0.7);
                }
                &:active,&:focus{
                    background-color  :  #C20000;
                } 
                &:disabled{
                    background-color :  #999999;
                }`;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
                height:35px;
                width:130px;
                font-size:15px;
                font-weight:400;
            `;
      case "lg":
        return `
                height:48px;
                width:343px;
                font-size:17px;
                font-weight:bold;
            `;
      default:
        return `
                height:40px;
                width:200px;
                font-weight:bold;
            `;
    }
  }} 
${(props) => (props.fullWidth ? "width:100%" : "")};
`;
