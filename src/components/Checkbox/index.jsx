import React from "react";
import { Checkbox as CheckboxAnt } from "antd";
import { CheckboxStyled } from "./styled";

const Checkbox = ({ formik, name, ...props }) => {
  return (
    <CheckboxStyled>
      <CheckboxAnt.Group
        onChange={(checkedValues) => {
          formik.setFieldValue(name, checkedValues);
        }}
        name={name}
        {...props}
      />
      ;
    </CheckboxStyled>
  );
};

export default Checkbox;
