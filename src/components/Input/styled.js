import styled from "styled-components";

export const InputContainer = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
export const InputBoxBase = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `height:40px;
                width:300px;
            
             `;
      case "base":
        return `height:48px;
                width:343px;
              
                `;
      case "lg":
        return `height:56px;
                width:450px;
               
               `;
    }
  }}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
export const ErrorInputBox = styled(InputBoxBase)`
  border-color: red;
`;

export const InputBase = styled.input.attrs(({ $type }) => ({
  type: $type,
}))`
  border: none;
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 0 16px;

  flex: 1;
  &::placeholder {
    font-weight: 400;
  }
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
                font-size:15px;
             `;
      case "base":
        return `
                font-size:16px;
                `;
      case "lg":
        return `
                font-size:20px;
               `;
    }
  }}
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
export const InputPrefix = styled.i`
  margin: ${({ marginPrefix }) => marginPrefix};
  padding: ${({ paddingPrefix }) => paddingPrefix};

  border-right: ${({ border }) => border};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: ${({ sizePrefix }) => sizePrefix} !important;
  }
`;
export const ErrorInputPrefix = styled(InputPrefix)`
  color: red;
  border-color: red;
`;

export const LabelInput = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};

  margin: ${({ marginLabel }) => marginLabel};
`;

export const MessageInput = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  margin: ${({ marginMessage }) => marginMessage};
  color: red;
`;
