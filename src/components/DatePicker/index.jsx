import React from "react";
import { DatePicker } from "antd";
import { DatePickerStyled } from "./styled";

const IDatePicker = ({ formik, name, ...props }) => {
  return (
    <DatePickerStyled>
      <DatePicker
        name={name}
        onChange={(time) => {
          formik.setFieldValue(name, time);
        }}
        {...props}
      />
    </DatePickerStyled>
  );
};

export default IDatePicker;
