import React from "react";
import ISelect from "../../components/Select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectGuide = () => {
  return (
    <ISelect
      data={options}
      placeholder="Chọn Tỉnh/Thành phố"
      label="Tỉnh/Thành phố"
    ></ISelect>
  );
};

export default SelectGuide;
