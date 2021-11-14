import React, { useState } from "react";
import Tabs from "components/Tabs";
import FormComponent from "components/presentation/FormComponent";

import * as S from "./styled"

const Home = () => {
  const [active, setActive] = useState(0);

  return (
    <S.WrapperHome>
      <h1>Merit Money</h1>
      <h2>Cadastre e receba vantagens</h2>
      <S.WrapperTabs>
        <Tabs
          active={active}
          tabs={[
            {
              title: "Aluno",
              content: <FormComponent user="student" />,
              callback: () => {
                setActive(0);
              },
            },
            {
              title: "Empresa",
              content: <FormComponent user="company" />,
              callback: () => {
                setActive(1);
              },
            },
          ]}
        />
      </S.WrapperTabs>
    </S.WrapperHome>
  );
};

export default Home;
