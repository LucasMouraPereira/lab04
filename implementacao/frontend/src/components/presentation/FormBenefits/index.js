import React from "react";
import Router from "next/router";
import api from "utils/api";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import Input from "components/Input";
import Button from "components/Button";

const FormBenefits = () => {
  const initialValues = {
    benefits: "",
    price: "",
  };

  const validationSchema = Yup.object().shape({
    benefits: Yup.string().required("Campo obrigatório"),
    price: Yup.number().required("Campo obrigatório"),
  });

  const onSubmit = async (values) => {
    try {
      await api.post("/signUp/benefits", {
        benefits: values.benefits,
        price: values.price,
      });
      Router.reload(window.location.pathname);
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, handleChange, values }) => (
          <Form>
            <>
              <Input
                placeholder="Descrição da vantagem"
                onChange={handleChange}
                name="benefits"
                type="text"
                value={values.benefits}
                error={errors.benefits}
                width="100%"
              />
              <Input
                placeholder="Valor da vantagem"
                onChange={handleChange}
                name="price"
                type="text"
                value={values.price}
                error={errors.price}
                width="100%"
              />
              <div>
                <Button name="Cadastrar Vantagens" type="submit" mt="12px" />
              </div>
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBenefits;
