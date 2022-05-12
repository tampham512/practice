import styled from "styled-components";

export const SelectBox = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};

  .ant-select {
    background-color: white;
    font-size: ${({ fontSize }) => fontSize};
    .ant-select-selector {
      box-shadow: none !important;
      height: ${({ height }) => height};
    }
    .ant-select-selection-placeholder {
      line-height: ${({ height }) => height};
    }
    .ant-select-selection-item {
      line-height: ${({ height }) => height};
    }

    &:hover {
      .ant-select-selector {
        border-color: ${({ colorHover }) => colorHover};
      }
      .ant-select-selection-placeholder {
        color: ${({ colorHover }) => colorHover};
      }
      .ant-select-arrow span svg {
        fill: ${({ colorHover }) => colorHover};
      }
    }
    .ant-select-selector {
      border-color: ${({ colorHover, $value }) => $value && colorHover};
    }
    .ant-select-arrow span svg {
      fill: ${({ colorHover, $value }) => $value && colorHover};
    }
    .ant-select-item.ant-select-item-group {
      color: red;
    }
  }
  .ant-select-focused {
    .ant-select-selector {
      border-color: ${({ colorHover }) => colorHover} !important;
    }
    .ant-select-selection-placeholder {
      color: ${({ colorHover }) => colorHover};
    }
    .ant-select-arrow span svg {
      fill: ${({ colorHover }) => colorHover};
    }
  }
`;
export const LabelSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const ErrorSelectBox = styled(SelectBox)``;

export const MessageSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
