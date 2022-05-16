import React, { useRef } from "react";
import { TimePicker as TimePickerBase } from "antd";
import { TimePickerStyled, LabelTimePicker, MessageTimePicker } from "./styled";
const TimePicker = ({
  $width,
  $type = "default",
  formik,
  name,
  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",
  errorMessage,
  fontSizeMessage = "14px",
  fontWeightMessage = "700",
  gap = "6px",
  ...props
}) => {
  const refTimePicker = useRef(null);

  const handleClickLabel = () => {
    refTimePicker.current.focus();
  };
  switch ($type) {
    case "default":
      return (
        <TimePickerStyled $width={$width} gap={gap}>
          {label && (
            <LabelTimePicker
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelTimePicker>
          )}
          <TimePickerBase
            ref={refTimePicker}
            name={name}
            onChange={(time, timeString) => {
              formik.setFieldValue(name, timeString);
            }}
            status={errorMessage && "error"}
            {...props}
          />
          {errorMessage && (
            <MessageTimePicker
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
            >
              {errorMessage}
            </MessageTimePicker>
          )}
        </TimePickerStyled>
      );
    case "range":
      return (
        <TimePickerStyled $width={$width} gap={gap}>
          {label && (
            <LabelTimePicker
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelTimePicker>
          )}
          <TimePickerBase.RangePicker
            ref={refTimePicker}
            name={name}
            onChange={(time, timeString) => {
              formik.setFieldValue(name, timeString);
            }}
            status={errorMessage && "error"}
            {...props}
          />
          {errorMessage && (
            <MessageTimePicker
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
            >
              {errorMessage}
            </MessageTimePicker>
          )}
        </TimePickerStyled>
      );
  }
};

export default TimePicker;
