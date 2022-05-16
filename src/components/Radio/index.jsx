import React from "react";
import { Radio as RadioBase } from "antd";
import { RadioStyled } from "./styled";

const Radio = ({ formik, name, ...props }) => {
  return (
    <RadioStyled>
      <RadioBase.Group
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value);
        }}
        name={name}
        {...props}
      />
      ;
    </RadioStyled>
  );
};

export default Radio;
