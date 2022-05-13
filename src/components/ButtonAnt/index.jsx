import React from "react";
import { Button } from "antd";
import { ButtonAntBase } from "./styled";

const ButtonAnt = ({
  $type = "primary",
  width,
  height,
  margin = "10px 0",
  padding = "8px 15px",
  fontSize = "16px",
  size = "base",
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
        <ButtonAntBase size={size} fontSize={fontSize}>
          <Button type="primary" {...props}>
            primary
          </Button>
        </ButtonAntBase>
      );
  }
};

export default ButtonAnt;
