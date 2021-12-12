import React from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Router from "next/router";
import api from "utils/api";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

const InputChangeRegister = ({ id, type }) => {
  const initialValues = {
    password: "",
  };

  const initialValuesBenefits = {
    benefits: "",
    price: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8).required("Campo obrigatório"),
  });

  const onSubmit = async (values) => {
    try {
      await api.put(`/updatePassword/${id}`, { password: values.password });
      Cookies.set("password", JSON.stringify(values.password));
      Router.reload(window.location.pathname);
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={type === "default" ? initialValues : initialValuesBenefits}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, handleChange, values }) => (
          <Form>
            {type === "default" ? (
              <>
                <Input
                  placeholder="Senha"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={values.password}
                  error={errors.password}
                  width="100%"
                />
                <div>
                  <Button name="Alterar senha" type="submit" mt="12px" />
                </div>
              </>
            ) : (
              <>
                <Input
                  placeholder="Descrição da vantagem"
                  onChange={handleChange}
                  name="benefits"
                  type="text"
                  value={values.benefits}
                  width="100%"
                />
                <Input
                  placeholder="Valor da vantagem"
                  onChange={handleChange}
                  name="price"
                  type="text"
                  value={values.price}
                  width="100%"
                />
                <div>
                  <Button name="Alterar dados" type="submit" mt="12px" />
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

InputChangeRegister.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputChangeRegister;
