import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Tabs = ({ active, tabs }) => (
  <>
    <S.Flex>
      {tabs.map((tab, index) => (
        <S.Title
          key={index}
          active={active === index}
          onClick={tab.callback}
        >
          <h3>{tab.title}</h3>
        </S.Title>
      ))}
    </S.Flex>
    {tabs.map((tab, i) => (
      <S.Content key={i} active={active === i}>
        {tab.content}
      </S.Content>
    ))}
  </>
);

Tabs.propTypes = {
  active: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Tabs;