import styled from "styled-components";

export const SelectBox = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  span {
    display: none;
  }
  .react-select-container {
    height: ${({ height }) => height};
    &:hover {
      .react-select__control {
        border-color: ${({ colorHover }) => colorHover};
      }
      .react-select__placeholder,
      .react-select__indicator {
        color: ${({ colorHover }) => colorHover};
      }
    }

    .react-select__control {
      border: ${({ border }) => border};
      height: ${({ height }) => height};
      &--is-focused {
        border-color: ${({ colorHover }) => colorHover};
        box-shadow: none !important;
        color: ${({ colorHover }) => colorHover};
        .react-select__placeholder,
        .react-select__indicator {
          color: ${({ colorHover }) => colorHover};
        }
      }
      &--menu-is-open {
        .react-select__single-value {
          font-weight: 700;
        }
        .react-select__indicator {
          transform: rotateX(180deg);
        }
      }
    }
    .react-select__control {
      border-color: ${({ colorHover, $value }) => $value && colorHover};
    }
    .react-select__indicator {
      color: ${({ colorHover, $value }) => $value && colorHover};
    }

    .react-select__menu {
      margin-top: 5px;
      .react-select__option {
        background-color: white;
        color: ${({ color }) => color};
        &:hover {
          color: ${({ colorHover }) => colorHover};
        }
      }
    }
  }
`;
export const LabelSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const ErrorSelectBox = styled(SelectBox)`
  .react-select__control {
    border-color: red !important;
  }
`;
export const MessageSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
