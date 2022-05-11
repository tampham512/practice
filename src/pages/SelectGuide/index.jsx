import React from "react";
import ISelect from "../../components/Select";

const options = [
  { value: "quang_nam", label: "Quảng Nam" },
  { value: "quang-ngai", label: "Quảng Ngãi" },
  { value: "hue", label: "Huế" },
  { value: "da_nang", label: "Đà Nẵng" },
];

const SelectGuide = () => {
  return (
    <>
      <ISelect
        data={options}
        placeholder="Chọn Tỉnh/Thành phố"
        label="Tỉnh/Thành phố"
        onChange={(e) => {
          console.log(e);
        }}
      ></ISelect>
      <ISelect
        data={options}
        placeholder="Chọn Tỉnh/Thành phố"
        label="Tỉnh/Thành phố"
        onChange={(e) => {
          console.log(e);
        }}
        status="error"
        message="Tỉnh thành phố không được để trống"
      ></ISelect>
    </>
  );
};

export default SelectGuide;
