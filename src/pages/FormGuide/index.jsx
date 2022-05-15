import React from "react";

import { useFormik, FieldArray, FormikProvider } from "formik";

import Button from "../../components/Button";
import Input from "../../components/Input";
import ISelect from "../../components/Select";
import * as yup from "yup";
import { FieldArrayStyled } from "./styled";

import moment from "moment";
import IRadio from "../../components/Radio";
import ICheckbox from "../../components/Checkbox";
import IDatePicker from "../../components/DatePicker";
import ITimePicker from "../../components/TimePicker";

const options = [
  { value: "quang_nam", label: "Quảng Nam" },
  { value: "quang-ngai", label: "Quảng Ngãi" },
  { value: "hue", label: "Huế" },
  { value: "da_nang", label: "Đà Nẵng" },
];
const optionsCheckBox = [
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
  { label: "Orange", value: "orange" },
];

const optionsRadio = [
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
  { label: "Orange", value: "orange" },
];
const validationSchema = yup.object({
  fullname: yup.string().required("Vui lòng nhập Tên đăng nhập/Email"),
  provinces: yup.string().required("Vui lòng chọn Tỉnh/Thành phố"),
  timePicker: yup.string().required(),
  datePicker: yup.string().required(),
  rangePicker: yup.array().required(),
});

function FormGuide() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      provinces: "",
      check: [],
      radio: optionsRadio[0].value,
      arrayField: [
        {
          email: "",
        },
      ],
      timePicker: "",
      datePicker: "",
      rangePicker: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 500);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Tên đăng nhập/Email"
        placeholder="Tên đăng nhập/Email"
        width="400px"
        name="fullname"
        id="fullname"
        value={formik.values.fullname}
        onChange={(e) => {
          formik.setFieldValue("fullname", e.target.value);
        }}
        errorMessage={formik.touched.fullname && formik.errors.fullname}
      />
      <ISelect
        label="Tỉnh/Thành phố"
        placeholder="Chọn Tỉnh/Thành phố"
        name="provinces"
        value={formik.values.provinces || null}
        formik={formik}
        dataCustom={options}
        errorMessage={formik.touched.provinces && formik.errors.provinces}
      />

      <ICheckbox
        name="check"
        options={optionsCheckBox}
        value={formik.values.check}
        formik={formik}
      />

      <br />

      <IRadio
        name="radio"
        options={optionsRadio}
        formik={formik}
        value={formik.values.radio}
      />

      <br />
      <div>
        <FormikProvider value={formik}>
          <FieldArray name="arrayField">
            {({ insert, remove, push }) => (
              <div>
                {formik.values.arrayField.length > 0 &&
                  formik.values.arrayField.map((friend, index) => (
                    <FieldArrayStyled key={index}>
                      <Input
                        prefix="bx bxs-envelope"
                        placeholder="Nhập Email"
                        width="400px"
                        name={`arrayField.${index}.email`}
                        value={formik.values.arrayField[index].email}
                        onChange={(e) => {
                          formik.setFieldValue(
                            `arrayField.${index}.email`,
                            e.target.value
                          );
                        }}
                      />
                      <Button
                        onClick={() => remove(index)}
                        $type="gray"
                        type="button"
                        width="48px"
                        height="48px"
                      >
                        X
                      </Button>
                    </FieldArrayStyled>
                  ))}
                <Button
                  $type="secondary"
                  type="button"
                  onClick={() => {
                    push({ email: "" });
                  }}
                  size="sm"
                >
                  Add Field
                </Button>
              </div>
            )}
          </FieldArray>
        </FormikProvider>
      </div>
      <br />

      <IDatePicker
        name="datePicker"
        style={{ width: "343px" }}
        defaultValue={moment(new Date(), "DD/MM/YYYY")}
        format="DD/MM/YYYY"
        value={formik.values.datePicker}
        formik={formik}
        status={
          formik.touched.datePicker && formik.errors.datePicker ? "error" : ""
        }
      />

      <br />

      <ITimePicker
        style={{ width: "343px" }}
        name="timePicker"
        defaultValue={moment("00:00:00", "HH:mm:ss")}
        value={formik.values.timePicker}
        formik={formik}
        status={
          formik.touched.timePicker && formik.errors.timePicker ? "error" : ""
        }
      />

      <br />

      <ITimePicker
        $type="range"
        style={{ width: "343px" }}
        name="rangePicker"
        value={formik.values.rangePicker}
        formik={formik}
        status={
          formik.touched.rangePicker && formik.errors.rangePicker ? "error" : ""
        }
      />

      <br />
      <Button
        htmlType="submit"
        width="343px"
        height="40px"
        $fontSize="15px"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default FormGuide;
