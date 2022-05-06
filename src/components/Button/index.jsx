import React from "react";
import { PrimaryButton, SecondaryButton, GrayButton } from "./styled";
const Button = ({
  width,
  height,
  margin = "10px",
  padding = "8px 15px",
  fontSize = "16px",
  type = "primary",
  size = "base",
  cursor = "pointer",
  border = "none",
  color = "white",
  disabled,
  children,
}) => {
  switch (type) {
    case "primary":
      return (
        <PrimaryButton
          fontSize={fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          color={color}
          border={border}
          size={size}
          height={height}
          disabled={disabled}
        >
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton
          fontSize={fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          border={border}
          size={size}
          color={color}
          disabled={disabled}
        >
          {children}
        </SecondaryButton>
      );
    case "gray":
      return (
        <GrayButton
          fontSize={fontSize}
          width={width}
          margin={margin}
          padding={padding}
          cursor={cursor}
          size={size}
          color={color}
          border={border}
          height={height}
          disabled={disabled}
        >
          {children}
        </GrayButton>
      );
  }
};

export default Button;
