import React from "react";
import { Checkbox } from "antd";
import { CheckboxStyled } from "./styled";

const ICheckbox = ({ formik, name, ...props }) => {
  return (
    <CheckboxStyled>
      <Checkbox.Group
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

export default ICheckbox;
