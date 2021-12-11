import React from "react";
import Cookies from "js-cookie";
import api from "utils/api";

import { useRouter } from "next/router";
import { STUDENT, COMPANY, TEACHER } from "utils/constants/urls";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

import * as S from "./styled";

const FormComponent = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Campo obrigatório"),
    password: Yup.string().min(8).required("Campo obrigatório"),
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await api.post("/login", values);
      const responseType = data.type;
      Cookies.set("id", JSON.stringify(data.id));
      Cookies.set("email", JSON.stringify(data.email));
      Cookies.set("password", JSON.stringify(data.password));
      Cookies.set("type", JSON.stringify(data.type));
      if (responseType === "student") {
        router.push(STUDENT);
      }
      if (responseType === "company") {
        router.push(COMPANY);
      }
      if (responseType === "professor") {
        router.push(TEACHER);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.WrapperForm>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, handleChange, values }) => (
          <Form>
            <S.FlexForm>
              <S.WrapperInput>
                <Input
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  width="100%"
                />
                <Input
                  placeholder="Senha"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={values.password}
                  error={errors.password}
                  width="100%"
                />
              </S.WrapperInput>
            </S.FlexForm>
            <S.Button>
              <Button name="Entrar" type="submit" mt="12px" />
            </S.Button>
          </Form>
        )}
      </Formik>
    </S.WrapperForm>
  );
};

export default FormComponent;
