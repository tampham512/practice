import React, { useState } from "react";
import { SelectBox, LabelSelect } from "./styled";
import Select from "react-select";
const ISelect = ({
  status = "base",
  placeholder = "Chọn ..,",

  width = "343px",
  height = "48px",
  color = "#C1C1C1",
  border = "1px solid #C1C1C1",
  colorHover = "#333333",
  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",
  gap = "8px",

  data,
}) => {
  const [value, setValue] = useState("");
  console.log(value);
  switch (status) {
    case "base":
      return (
        <SelectBox
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
          />
        </SelectBox>
      );
  }
};
export default ISelect;
