import styled from "styled-components";
export const SelectBox = styled.div`
  height: ${(height) => height};
  position: relative;

  color: ${({ color }) => color};
  width: ${({ width }) => width};
`;
export const SelectBase = styled.select`
  appearance: none;
  width: 100%;
  outline: none;
  appearance: none;
  height: ${(height) => height};
  border: ${({ border }) => border};
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};

  &:after {
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #c1c1c1;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  &:hover {
    border-color: ${({ colorHover }) => colorHover};
    color: ${({ colorHover }) => colorHover};
  }
  &:focus {
    border-color: ${({ colorHover }) => colorHover};
    color: ${({ colorHover }) => colorHover};
  }
`;
export const OptionBase = styled.option``;
