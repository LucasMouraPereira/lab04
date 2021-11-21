import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Tabs = ({ active, tabs }) => (
  <S.Flex>
    <S.ContentTab>
      {tabs.map((tab, index) => (
        <S.WrapperTab>
          <S.Title key={index} active={active === index} onClick={tab.callback}>
            <h3>{tab.title}</h3>
          </S.Title>
        </S.WrapperTab>
      ))}
    </S.ContentTab>
    {tabs.map((tab, index) => (
      <S.Content key={index} active={active === index}>
        {tab.content}
      </S.Content>
    ))}
  </S.Flex>
);

Tabs.propTypes = {
  active: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Tabs;
