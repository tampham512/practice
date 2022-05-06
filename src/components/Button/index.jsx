import React from "react";
import { PrimaryButton, SecondaryButton, GrayButton } from "./styled";
const Button = ({
  width,
  height,
  margin = "10px",
  padding = "8px 15px",
  $fontSize,
  $type = "primary",
  $size = "base",
  cursor = "pointer",
  border = "none",
  color = "white",
  borderRadius = "4px",
  disabled,
  children,
  ...props
}) => {
  switch ($type) {
    case "primary":
      return (
        <PrimaryButton
          fontSize={$fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          color={color}
          border={border}
          size={$size}
          height={height}
          disabled={disabled}
          borderRadius={borderRadius}
        >
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton
          fontSize={$fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          color={color}
          border={border}
          size={$size}
          height={height}
          disabled={disabled}
          borderRadius={borderRadius}
        >
          {children}
        </SecondaryButton>
      );
    case "gray":
      return (
        <GrayButton
          fontSize={$fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          color={color}
          border={border}
          size={$size}
          height={height}
          disabled={disabled}
          borderRadius={borderRadius}
        >
          {children}
        </GrayButton>
      );
  }
};

export default Button;
