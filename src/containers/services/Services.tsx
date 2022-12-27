import { Box, Icon, Image, Text } from "../../components";
import styled, { css, keyframes } from "styled-components";

import React from "react";
import Statistics from "./Statistics";
import images from "../../constants/images";
import { motion } from "framer-motion";

const animateBorder = keyframes`
  0% {
    border-top-color: var(--primary-color);
  }
  25% {
    border-right-color: var(--primary-color);
  }
  50% {
    border-bottom-color: var(--primary-color);
  }
  75% {
    border-left-color: var(--primary-color);
  }
  100% {
    border-top-color: var(--primary-color);
  }
  
`;
const animateBackground = keyframes`
   0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  
`;
const rotate = keyframes`
  0% {
    rotate:0deg;
  }
  100% {
    rotate:360deg;
  }
  
  
`;

const AnimatedBorder = styled(Box)`
  border: 2px solid transparent;
  &:hover {
    animation: ${animateBorder} 3s linear infinite;

    & svg {
      animation: ${rotate} 3s linear infinite;
      fill: var(--primary-color);
    }

    & .service-text span {
      background: var(--primary-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${animateBackground} 1s linear infinite;
    }
  }
`;

type Props = {};

const Services = (props: Props) => {
  return (
    <Box direction="column">
      <Statistics />
      <Box direction="column" padding="3em 0" align="center" gap="2em">
        <Box direction="column" gap="0.75em">
          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            color="#fff"
            textAlign="center"
          >
            How I Can Help You?
          </Text>
          <Text
            fontSize={"md"}
            fontType="header"
            color="#fff"
            textAlign="center"
          >
            As a JavaScript developer, I can provide a wide range of services to
            you.
          </Text>
        </Box>
        <Box flex={1} align="center" justify="center" margin="auto">
          <Image
            src={images.services}
            alt="my personal image"
            objectFit="cover"
            blind="lighten"
            width="100%"
            height="100%"
          />
        </Box>

        {/* Services Card */}
        <Box
          flex={1}
          align="center"
          justify="center"
          margin="auto"
          gap="2em"
          wrap="wrap"
        >
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

type ServiceCardProps = {};

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <AnimatedBorder
      flex={1}
      padding="1em"
      rounded="1em"
      backgroundColor="#0003"
      direction="column"
      gap="2em"
      justify="space-between"
      position={{ position: "relative" }}
    >
      <Icon name="react" size="3em" color="#fff" />
      <Box direction="column" gap="0.5em" className="service-text">
        <Text fontSize={"xlg"} fontType="header" color="#fff" fontWeight="bold">
          Web Development
        </Text>
        <Text fontSize={"sm"} fontType="header" color="#fff">
          Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design.
        </Text>
      </Box>
    </AnimatedBorder>
  );
};
