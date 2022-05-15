import React from "react";
import { Radio } from "antd";
import { RadioStyled } from "./styled";

const IRadio = ({ formik, name, ...props }) => {
  return (
    <RadioStyled>
      <Radio.Group
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

export default IRadio;
