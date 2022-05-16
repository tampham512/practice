import React from "react";

import { useFormik, FieldArray, FormikProvider } from "formik";

import * as yup from "yup";
import { FieldArrayStyled } from "./styled";

import moment from "moment";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Radio from "../../components/Radio";
import Checkbox from "../../components/Checkbox";
import DatePicker from "../../components/DatePicker";
import TimePicker from "../../components/TimePicker";

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
  timePicker: yup
    .string()
    .required("Vui lòng chọn timePicker")
    .nullable("Vui lòng chọn timePicker"),
  datePicker: yup
    .string()
    .required("Vui lòng chọn Ngày/Tháng/Năm")
    .nullable("Vui lòng chọn Ngày/Tháng/Năm"),
  rangePicker: yup
    .array()
    .required("Vui lòng chọn rangePicker")
    .nullable("Vui lòng chọn rangePicker"),
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
      <Select
        label="Tỉnh/Thành phố"
        placeholder="Chọn Tỉnh/Thành phố"
        name="provinces"
        value={formik.values.provinces || null}
        formik={formik}
        dataCustom={options}
        errorMessage={formik.touched.provinces && formik.errors.provinces}
      />

      <Checkbox
        name="check"
        options={optionsCheckBox}
        value={formik.values.check}
        formik={formik}
      />

      <br />

      <Radio
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

      <DatePicker
        label="Chọn Ngày/Tháng/Năm"
        name="datePicker"
        $width="343px"
        format="DD/MM/YYYY"
        value={
          formik.values.datePicker &&
          moment(formik.values.datePicker, "DD/MM/YYYY")
        }
        formik={formik}
        errorMessage={formik.touched.datePicker && formik.errors.datePicker}
      />

      <br />

      <TimePicker
        label="Chọn TimePicker"
        $width="343px"
        name="timePicker"
        defaultValue={moment("00:00:00", "HH:mm:ss")}
        value={
          formik.values.timePicker &&
          moment(formik.values.timePicker, "HH:mm:ss")
        }
        formik={formik}
        errorMessage={formik.touched.timePicker && formik.errors.timePicker}
      />

      <br />

      <TimePicker
        label="Chọn RangePicker"
        $type="range"
        $width="343px"
        name="rangePicker"
        value={
          formik.values.rangePicker && [
            moment(formik.values.rangePicker[0], "HH:mm:ss"),
            moment(formik.values.rangePicker[1], "HH:mm:ss"),
          ]
        }
        // value={formik.values.rangePicker}
        formik={formik}
        errorMessage={formik.touched.rangePicker && formik.errors.rangePicker}
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
