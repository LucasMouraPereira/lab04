import React, { useRef } from "react";
import PropTypes from "prop-types";
import useOutsideClick from "hooks/useOutsideClick";

import * as S from "./styled";

const Modal = ({ style, setIsOpen, isOpen, title, content }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));

  return (
    isOpen && (
      <S.Container>
        <S.ModalContent ref={wrapperRef} style={style}>
          <S.ModalHeader>
            <S.Title>{title || ""}</S.Title>
            <S.ModalClose onClick={() => setIsOpen(false)}>x</S.ModalClose>
          </S.ModalHeader>
          <S.ModalBody>{content}</S.ModalBody>
        </S.ModalContent>
      </S.Container>
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.any),
};

Modal.defaultProps = {
  title: "",
  setIsOpen: () => {},
  isOpen: false,
  style: {},
};

export default Modal;
