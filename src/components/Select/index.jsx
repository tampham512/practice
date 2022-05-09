import React from "react";
import { SelectBox, SelectBase, OptionBase } from "./styled";

export const Select = ({
  status = "base",
  placeholder,
  children,
  width = "350px",
  height = "48px",
  color = "#C1C1C1",
  colorHover = "#333333",
  border = "1px solid #C1C1C1 ",
  borderRadius = "4px",
  padding = "0 16px",
  fontSize = "16px",
}) => {
  switch (status) {
    case "base":
      return (
        <SelectBox height={height} width={width}>
          <SelectBase
            width={width}
            height={height}
            color={color}
            border={border}
            borderRadius={borderRadius}
            padding={padding}
            fontSize={fontSize}
            colorHover={colorHover}
          >
            <Option value={-1}>{placeholder}</Option>
            {children}
          </SelectBase>
        </SelectBox>
      );
  }
};

export const Option = ({ value, children }) => {
  return <OptionBase value={value}>{children}</OptionBase>;
};
