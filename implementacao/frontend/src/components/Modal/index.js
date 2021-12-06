import React, { useRef } from "react";
import PropTypes from "prop-types";
import useOutsideClick from "hooks/useOutsideClick";

import * as S from "./styled";

const Modal = ({ setIsOpen, isOpen, title, content }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));

  return (
    isOpen && (
      <S.Container>
        <S.ModalContent ref={wrapperRef}>
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
};

Modal.defaultProps = {
  title: "",
  setIsOpen: () => {},
  isOpen: false,
};

export default Modal;
