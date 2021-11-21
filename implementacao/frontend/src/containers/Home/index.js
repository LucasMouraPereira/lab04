import React, { useState } from "react";
import Tabs from "components/Tabs";
import FormComponent from "components/presentation/FormComponent";

import * as S from "./styled";

const Home = () => {
  const [active, setActive] = useState(0);

  return (
    <S.ContentHome>
      <S.WrapperHome>
        <h1>Merit Money</h1>
        <h2>Cadastre e receba vantagens</h2>
        <S.WrapperTabs>
          <Tabs
            active={active}
            tabs={[
              {
                title: "Aluno",
                content: <FormComponent user={active} />,
                callback: () => {
                  setActive(0);
                },
              },
              {
                title: "Empresa",
                content: <FormComponent user={active} />,
                callback: () => {
                  setActive(1);
                },
              },
            ]}
          />
        </S.WrapperTabs>
        <a href="/login">Fazer login</a>
      </S.WrapperHome>
    </S.ContentHome>
  );
};

export default Home;
