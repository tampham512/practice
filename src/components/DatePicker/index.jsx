import React, { useRef } from "react";
import { DatePicker as DatePickerBase } from "antd";
import { DatePickerStyled, LabelDatePicker, MessageDatePicker } from "./styled";

const DatePicker = ({
  $width,
  status = "base",
  formik,
  name,
  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",
  errorMessage,
  fontSizeMessage = "14px",
  fontWeightMessage = "700",
  gap = "8px",
  ...props
}) => {
  const pickerRef = useRef(null);
  const handleClickLabel = () => {
    pickerRef.current.focus();
  };

  status = errorMessage ? "error" : "base";
  switch (status) {
    case "base":
      return (
        <DatePickerStyled gap={gap} $width={$width}>
          {label && (
            <LabelDatePicker
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelDatePicker>
          )}
          <DatePickerBase
            ref={pickerRef}
            name={name}
            onChange={(time, timeString) => {
              formik.setFieldValue(name, timeString);
            }}
            {...props}
          />
        </DatePickerStyled>
      );
    case "error":
      return (
        <DatePickerStyled gap={gap} $width={$width}>
          {label && (
            <LabelDatePicker
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelDatePicker>
          )}
          <DatePickerBase
            ref={pickerRef}
            name={name}
            onChange={(time, timeString) => {
              formik.setFieldValue(name, timeString);
            }}
            {...props}
            status="error"
          />
          {errorMessage && (
            <MessageDatePicker
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
            >
              {errorMessage}
            </MessageDatePicker>
          )}
        </DatePickerStyled>
      );
  }
};

export default DatePicker;
