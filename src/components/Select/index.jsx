import React, { useState } from "react";
import {
  SelectBox,
  LabelSelect,
  ErrorSelectBox,
  MessageSelect,
} from "./styled";
import Select from "react-select";
const ISelect = ({
  status = "base",
  placeholder = "Chọn ...",
  margin = "16px 0px",

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
  onChange,
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
          gap={gap}
          $value={value}
        >
          {label && (
            <LabelSelect
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              // onClick={handleClickLabel}
            >
              {label}
            </LabelSelect>
          )}
          <Select
            placeholder={placeholder}
            options={data}
            className="react-select-container"
            classNamePrefix="react-select"
            onChange={(e) => {
              setValue(e.value);
              onChange(e);
            }}
            isSearchable={false}
            blurInputOnSelect
            {...props}
          />
        </SelectBox>
      );
    case "error":
      return (
        <ErrorSelectBox
          height={height}
          width={width}
          border={border}
          color={color}
          colorHover={colorHover}
          gap={gap}
          $value={value}
        >
          {label && (
            <LabelSelect
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              // onClick={handleClickLabel}
            >
              {label}
            </LabelSelect>
          )}
          <Select
            placeholder={placeholder}
            options={data}
            className="react-select-container"
            classNamePrefix="react-select"
            onChange={(e) => {
              setValue(e.value);
            }}
            isSearchable={false}
            blurInputOnSelect
            {...props}
          />
          {message && (
            <MessageSelect
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
            >
              {message}
            </MessageSelect>
          )}
        </ErrorSelectBox>
      );
  }
};
export default ISelect;
