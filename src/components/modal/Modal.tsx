import React, { Ref, useCallback, useImperativeHandle, useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

interface ModalProps {
  ref: Ref<ModalHandle>;
  children: React.ReactNode;
}

export type ModalHandle = { toggle: () => void };

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal: React.ForwardRefRenderFunction<unknown, ModalProps> = (
  { children },
  ref
): JSX.Element | null => {
  const [show, setShow] = useState(false);

  const toggleModal = useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, [show]);

  useImperativeHandle(ref, () => ({
    toggle: toggleModal,
  }));

  return show ? (
    <ModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </ModalWrapper>
  ) : null;
};

export default React.forwardRef(Modal);
