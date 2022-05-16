import styled from "styled-components";
export const DatePickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width};
  gap: ${({ gap }) => gap};
`;

export const LabelDatePicker = styled.label`
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const MessageDatePicker = styled.label`
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
