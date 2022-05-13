import React from "react";
import ISelect from "../../components/Select";

import Button from "../../components/Button";
import { useFormik } from "formik";

const options = [
  { value: "quang_nam", label: "Quảng Nam" },
  { value: "quang-ngai", label: "Quảng Ngãi" },
  { value: "hue", label: "Huế" },
  { value: "da_nang", label: "Đà Nẵng" },
];

const SelectGuide = () => {
  const formik = useFormik({
    initialValues: {
      provinces: "",
      provinces01: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ISelect
          label="Tỉnh/Thành phố"
          placeholder="Chọn Tỉnh/Thành phố"
          name="provinces"
          id="provinces"
          formik={formik}
          dataCustom={options}
        ></ISelect>
        <ISelect
          label="Tỉnh/Thành phố"
          errorMessage="Tỉnh thành không được để trống"
          placeholder="Chọn Tỉnh/Thành phố"
          name="provinces01"
          id="provinces01"
          formik={formik}
          dataCustom={options}
        ></ISelect>
        <Button htmlType="submit" width="160px" height="40px" $fontSize="15px">
          Submit
        </Button>
      </form>
    </>
  );
};

export default SelectGuide;
