import Modal, { ModalHandle } from "../modal/Modal";

import Box from "../box/Box";
import EnquiryForm from "./EnquiryForm";
import React from "react";
import Text from "../text/Text";
import styled from "styled-components";
import { t } from "i18next";
import { useTranslate } from "../../hooks";

const message = `I really _like_ your portfolio and think you'd be a great fit for a project I'm working on. Your experience as a *JavaScript Developer* is especially impressive.
Could you let me know your availability and rates for this project?

Looking forward to working with you and seeing what we can accomplish together.

Sincerely`;

const Responsive = styled(Box)`
  cursor: pointer;

  &:hover {
    scale: 0.95;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

type Props = {};

function Enquiry({}: Props) {
  const t = useTranslate();
  const modalRef = React.useRef<ModalHandle>(null);

  const openModal = React.useCallback(() => {
    if (modalRef.current) {
      modalRef.current.toggle();
    }
  }, [modalRef.current]);

  return (
    <>
      <Modal ref={modalRef}>
        <EnquiryForm close={openModal} />
      </Modal>
      <Responsive
        width="max-content"
        backgroundColor="var(--primary-gradient)"
        rounded="0.25em"
        padding="0.35em 0.65em"
        onClick={openModal}
      >
        <Text fontSize={"md"} fontType="header" color="#fff">
          {t("HOME_HIRE")}
        </Text>
      </Responsive>
    </>
  );
}

export default Enquiry;
