import React from "react";
import { TimePicker } from "antd";
import { TimePickerStyled } from "./styled";
const ITimePicker = ({ $type = "default", formik, name, ...props }) => {
  switch ($type) {
    case "default":
      return (
        <TimePickerStyled>
          <TimePicker
            name={name}
            onChange={(time) => {
              formik.setFieldValue(name, time);
            }}
            {...props}
          />
        </TimePickerStyled>
      );
    case "range":
      return (
        <TimePickerStyled>
          <TimePicker.RangePicker
            name={name}
            onChange={(time) => {
              formik.setFieldValue(name, time);
            }}
            {...props}
          />
        </TimePickerStyled>
      );
  }
};

export default ITimePicker;
