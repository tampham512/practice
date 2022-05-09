import React from "react";
import { Select, Option } from "../../components/Select";

const SelectGuide = () => {
  return (
    <div>
      <Select placeholder="Chọn Tỉnh/Thành phố">
        <Option value={1}>Đà Nẵng</Option>
        <Option value={2}>Quảng Ngãi</Option>
        <Option value={3}>Quảng Nam</Option>
        <Option value={4}>Huê</Option>
      </Select>
    </div>
  );
};

export default SelectGuide;
