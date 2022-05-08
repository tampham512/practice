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
        ></Input>
        <Input
          placeholder="Tên đăng nhập/Email"
          prefix="bx bx-user-circle"
          width="400px"
          status="error"
          message="Tên đăng nhập/Email không đúng"
        ></Input>
      </div>
      <div>
        <Input
          $type="password"
          placeholder="Nhập mật khẩu"
          prefix="bx bx-lock-alt"
        ></Input>
        <Input
          $type="password"
          placeholder="Nhập mật khẩu"
          prefix="bx bx-lock-alt"
          status="error"
          message="Mật khẩu không chính xác"
        ></Input>
      </div>
      <div>
        <Input
          label="Tên đăng nhập/Email"
          placeholder="Tên đăng nhập/Email"
          width="400px"
        ></Input>
        <Input
          label="Tên đăng nhập/Email"
          placeholder="Tên đăng nhập/Email"
          width="400px"
          status="error"
          message="Tên đăng nhập/Email không đúng"
        ></Input>
      </div>
    </InputGuideContainer>
  );
};

export default InputGuide;
