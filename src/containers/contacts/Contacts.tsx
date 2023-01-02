import { Box, Enquiry, Icon, Text, Touchable } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const subject = "Project Inquiry";
const body = `Hi Diyaa,\t

I came across your portfolio and was impressed by your skills. I would like to request a quote for my business.`;

const ResponsiveFooter = styled(Box)`
  @media screen and (max-width: 680px) {
    & .footer-cta {
      width: 100%;
    }
  }
`;

type Props = {};

const Contacts = (props: Props) => {
  return (
    <ResponsiveFooter
      flex={1}
      gap="3em"
      justify="space-between"
      direction="column"
    >
      <Box
        backgroundColor={"#0004"}
        rounded="1em"
        direction="column"
        gap="1em"
        padding="1em"
        textAlign="center"
        width="70%"
        self="center"
        align="center"
        className="footer-cta"
      >
        <Text
          fontSize="md"
          fontType="header"
          gradient="var(--primary-gradient)"
          fontWeight="bold"
          lineHeight="1.5em"
        >
          Don't hesitate to contact me to discuss your project in more detail. I
          look forward to the opportunity to work with you and help bring your
          vision to life.
        </Text>
        <Enquiry />
      </Box>
      <Box
        flex={1}
        align="center"
        justify="space-between"
        direction="column"
        gap="0.5em"
      >
        <Text
          fontSize="sm"
          fontWeight="bold"
          fontType="header"
          gradient="var(--text-primary-color)"
        >
          Build with
          <Text
            fontSize="sm"
            fontWeight="bold"
            fontType="header"
            gradient="var(--primary-gradient)"
          >{` ❤ `}</Text>
          • Diyaa Gubarah <span className="current-date"></span>
        </Text>
        <Box align="center" gap="2em">
          <Touchable onClick={() => {}}>
            <a
              target={"_blank"}
              color="inherit"
              href={`https://www.linkedin.com/in/diyaa-gubarah/`}
            >
              <Icon
                name="linkedin"
                color="var(--primary-color)"
                size="0.95em"
              />
            </a>
          </Touchable>
          <Touchable onClick={() => {}}>
            <a
              target={"_blank"}
              color="inherit"
              href={`https://mail.google.com/mail/?view=cm&fs=1&cc=diyaa.gubarah@gmail.com&su=${subject}&body=${body}`}
            >
              <Icon name="gmail" color="var(--primary-color)" size="0.95em" />
            </a>
          </Touchable>
          <Touchable onClick={() => {}}>
            <a
              target={"_blank"}
              color="inherit"
              href={`https://github.com/Diyaa-Gubarah`}
            >
              <Icon name="github" color="var(--primary-color)" size="0.95em" />
            </a>
          </Touchable>
        </Box>
      </Box>
    </ResponsiveFooter>
  );
};

export default Contacts;
