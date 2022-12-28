import { Box, Image, Text, Touchable } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const message = `Dear Diyaa, I am writing to express my interest in hiring you as a software developer on a freelance basis.\nI have reviewed your portfolio and am impressed by the high quality of your work and the diverse range of projects you have completed.\nI am currently seeking a skilled software developer to work on a project for my company, and I believe that your skills and experience make you the perfect fit for this role. In particular, I was impressed by your experience as JavaScript Developer.
\nI would be grateful if you could provide me with more information about your availability and rates for this project.
\nI look forward to the opportunity to work with you and to see what we can accomplish together.

\n\nSincerely`;

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
            ME.
          </Text>
          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            gradient="var(--primary-gradient)"
          >
            DIYAA GUBARAH
          </Text>
          <Text
            fontSize={"md"}
            fontWeight="header"
            fontType="body"
            gradient="var(--primary-gradient)"
          >
            React Native, MERN Stack Developer.
          </Text>
        </Box>
        <Text fontSize={"xlg"} fontType="header" color="#fff">
          Don't let your ideas remain just that. Let's work together to{" "}
          <Text
            fontType="header"
            fontSize="none"
            fontWeight="bold"
            gradient="var(--primary-gradient)"
          >
            BRING YOUR NEXT PROJECT TO LIFE!
          </Text>
        </Text>

        <Box align="center" gap="1em">
          <Box
            width="max-content"
            backgroundColor="var(--primary-gradient)"
            rounded="0.25em"
            padding="0.35em 0.65em"
            className="home"
          >
            <Touchable onClick={() => {}} width="auto" className="home">
              <a
              target={'_blank'}
                color="inherit"
                href={`https://wa.me/+249111228700?text=${message}`}
              >
                <Text fontSize={"md"} fontType="header" color="#fff">
                  Hire Me
                </Text>
              </a>
            </Touchable>
          </Box>
          <Touchable onClick={() => {}} width="auto" className="home">
            <Text
              fontSize={"md"}
              fontType="header"
              gradient="var(--primary-gradient)"
            >
              <a
                href="https://download1979.mediafire.com/butxpfp9cpig/9bjglmocxdqwbka/Diyaa-Gubarah.CV.pdf"
                download
              >
                Download CV
              </a>
            </Text>
          </Touchable>
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
