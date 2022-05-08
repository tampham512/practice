import React from "react";
import {
  InputContainer,
  InputBoxBase,
  LabelInput,
  InputBase,
  ErrorInputBox,
  MessageInput,
  InputPrefix,
  ErrorInputPrefix,
} from "./styled";

const Input = ({
  $type = "text",
  status = "base",
  fontSize,
  fontWeight = "bold",
  border = "1px solid #333333",
  borderRadius = "8px",
  size = "base",
  padding = "0 16px 0 14px",
  margin = "5px 0",
  placeholder,
  width,
  height,

  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",
  marginLabel = "8px 0",

  message,
  fontSizeMessage = "14px",
  fontWeightMessage = "700",
  marginMessage = "5px 0",

  prefix,
  typePrefix,
  sizePrefix = "24px",
  paddingPrefix = "0 16px",

  ...props
}) => {
  switch (status) {
    case "base":
      return (
        <InputContainer margin={margin}>
          {label && (
            <LabelInput
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              marginLabel={marginLabel}
            >
              {label}
            </LabelInput>
          )}
          <InputBoxBase
            borderRadius={borderRadius}
            border={border}
            size={size}
            padding={padding}
            width={width}
            height={height}
          >
            {prefix && (
              <InputPrefix
                paddingPrefix={paddingPrefix}
                border={border}
                className={prefix}
                sizePrefix={sizePrefix}
              ></InputPrefix>
            )}
            <InputBase
              placeholder={placeholder}
              $type={$type}
              borderRadius={borderRadius}
              fontSize={fontSize}
              fontWeight={fontWeight}
              size={size}
              {...props}
            ></InputBase>
          </InputBoxBase>
        </InputContainer>
      );

    case "error":
      return (
        <InputContainer margin={margin}>
          {label && (
            <LabelInput
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              marginLabel={marginLabel}
            >
              {label}
            </LabelInput>
          )}
          <ErrorInputBox
            borderRadius={borderRadius}
            border={border}
            size={size}
            padding={padding}
            width={width}
            height={height}
          >
            {prefix && (
              <ErrorInputPrefix
                paddingPrefix={paddingPrefix}
                border={border}
                className={prefix}
                sizePrefix={sizePrefix}
              ></ErrorInputPrefix>
            )}
            <InputBase
              placeholder={placeholder}
              $type={$type}
              borderRadius={borderRadius}
              fontSize={fontSize}
              fontWeight={fontWeight}
              size={size}
              {...props}
            ></InputBase>
          </ErrorInputBox>
          {message && (
            <MessageInput
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
              marginMessage={marginMessage}
            >
              {message}
            </MessageInput>
          )}
        </InputContainer>
      );
  }
};

export default Input;
