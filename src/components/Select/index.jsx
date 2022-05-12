import React, { useState } from "react";
import {
  SelectBox,
  LabelSelect,
  ErrorSelectBox,
  MessageSelect,
} from "./styled";
import { Select } from "antd";

const { Option } = Select;

const ISelect = ({
  status = "base",
  placeholder = "Chọn ...",
  margin = "16px 0",
  fontSize = "16px",

  width = "343px",
  height = "48px",
  color = "#C1C1C1",
  border = "1px solid #C1C1C1",
  colorHover = "#333333",
  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",
  fontSizeMessage = "14px",
  fontWeightMessage = "700",

  gap = "8px",
  message,
  data,
  name,
  formik,
  dataCustom,
  ...props
}) => {
  const [value, setValue] = useState("");

  switch (status) {
    case "base":
      return (
        <SelectBox
          height={height}
          width={width}
          margin={margin}
          border={border}
          color={color}
          colorHover={colorHover}
          fontSize={fontSize}
          gap={gap}
          $value={value}
        >
          {label && (
            <LabelSelect
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
            >
              {label}
            </LabelSelect>
          )}
          <Select
            placeholder={placeholder}
            onChange={(value) => {
              formik && formik.setFieldValue(name, value);
              setValue(value);
            }}
            {...props}
          >
            {dataCustom &&
              dataCustom.length > 0 &&
              dataCustom.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
          </Select>
        </SelectBox>
      );
  }
};
export default ISelect;
