import React from "react";
import Input from "../../components/Input";
import { InputGuideContainer } from "./styled";

const InputGuide = () => {
  return (
    <InputGuideContainer>
      <div>
        <Input
          placeholder="Tên đăng nhập/Email"
          prefix="bx bx-user-circle"
          width="400px"
        />
        <Input
          placeholder="Tên đăng nhập/Email"
          prefix="bx bx-user-circle"
          width="400px"
          errorMessage="Tên đăng nhập/Email không đúng"
        />
      </div>
      <div>
        <Input
          $type="password"
          placeholder="Nhập mật khẩu"
          prefix="bx bx-lock-alt"
        />
        <Input
          $type="password"
          placeholder="Nhập mật khẩu"
          prefix="bx bx-lock-alt"
          errorMessage="Mật khẩu không chính xác"
        />
      </div>
      <div>
        <Input
          label="Tên đăng nhập/Email"
          placeholder="Tên đăng nhập/Email"
          width="400px"
        />
        <Input
          label="Tên đăng nhập/Email"
          placeholder="Tên đăng nhập/Email"
          width="400px"
          errorMessage="Tên đăng nhập/Email không đúng"
        />
      </div>
    </InputGuideContainer>
  );
};

export default InputGuide;
