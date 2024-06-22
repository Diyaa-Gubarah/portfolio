import { Box, Enquiry, Image, Text } from "../../components";

import React from "react";
import i18n from "../../i18n/i18n";
import images from "../../constants/images";
import styled from "styled-components";
import { useTranslate } from "../../hooks";

type Props = {};

const Responsive = styled(Box)`
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 3em;

    & .home {
      width: 100%;
      text-align: center;
    }
  }
`;

const Home = (props: Props) => {
  const t = useTranslate();

  return (
    <Responsive justify="space-between" gap="2em" padding="3em 0">
      <Box
        flex={1}
        direction="column"
        className="home"
        gap="3rem"
        justify="center"
      >
        <Box direction="column">
          <Text
            fontSize={"md"}
            fontType="header"
            color="#fff"
            fontWeight="bold"
          >
            {t("NAVIGATION_LINK_1")}.
          </Text>

          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            gradient="var(--primary-gradient)"
          >
            {t("HOME_NAME")}
          </Text>
          <Text
            fontSize={"md"}
            fontWeight="header"
            fontType="body"
            gradient="var(--primary-gradient)"
          >
            {t("HOME_OCCUPATION")}
          </Text>
        </Box>
        <Text fontSize={"xlg"} fontType="header" color="#fff">
          {t("HOME_CTA_TEXT")}{" "}
          <Text
            fontType="header"
            fontSize="none"
            fontWeight="bold"
            gradient="var(--primary-gradient)"
          >
            {t("HOME_CTA_TEXT_COLOR")}
          </Text>
        </Text>

        <Box align="center" gap="1em">
          <Enquiry />
          <Box width="auto" className="home" justify="center">
            <Text
              fontSize={"md"}
              fontType="header"
              gradient="var(--primary-gradient)"
            >
              <a
                target={"_blank"}
                href="https://drive.google.com/file/d/1ZdzZ1ftS5WqJiZrneZ47OjDi6e0lAeRl/view?usp=drive_link"
                download
              >
                {t("HOME_CV")}
              </a>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flex={1} align="center" justify="center" margin="auto">
        <Image
          src={images.personal}
          alt="my personal image"
          objectFit="cover"
          blind="lighten"
          width="100%"
          height="100%"
        />
      </Box>
    </Responsive>
  );
};

export default Home;
