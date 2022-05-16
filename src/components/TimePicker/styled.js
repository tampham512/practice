import styled from "styled-components";
export const TimePickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width};
  gap: ${({ gap }) => gap};
`;
export const LabelTimePicker = styled.label`
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const MessageTimePicker = styled.label`
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
