import { Box, Icon, Text } from "../../components";
import styled, { keyframes } from "styled-components";

import { IconType } from "../../components/icon/Icon";
import React from "react";
import Statistics from "./Statistics";
import images from "../../constants/images";

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

const rotate = keyframes`
  0% {
    rotate:0deg;
  }
  100% {
    rotate:360deg;
  }
`;

const AnimatedBorder = styled(Box)`
  & .service-text {
    border: 0.1em solid transparent;
  }

  &:hover {
    & svg {
      animation: ${rotate} 3s linear infinite;
      --webkit-animation: ${rotate} 3s linear infinite;
      fill: var(--primary-color);
    }

    & .service-text {
      animation: ${animateBorder} 3s linear infinite;
      -webkit-animation: ${animateBorder} 3s linear infinite;
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

        {/* Services Card */}
        <Box
          flex={1}
          align="center"
          justify="center"
          margin="auto"
          gap="2em"
          wrap="wrap"
        >
          <ServiceCard
            icon="react"
            header="Web Development"
            description="Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design."
          />
          <ServiceCard
            icon="react"
            header="Web Development"
            description="Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design."
          />
          <ServiceCard
            icon="react"
            header="Web Development"
            description="Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design."
          />
          <ServiceCard
            icon="react"
            header="Web Development"
            description="Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design."
          />
          <ServiceCard
            icon="react"
            header="Web Development"
            description="Building dynamic, interactive websites, including custom web
          applications, API integration, and responsive design."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

type ServiceCardProps = {
  icon: IconType;
  header: string;
  description: string;
};

const ServiceCard = ({ description, header, icon }: ServiceCardProps) => {
  return (
    <AnimatedBorder
      padding="1em"
      rounded="1em"
      margin="0 auto"
      flex={1}
      backgroundColor={`url(${images.bg})`}
      direction="column"
      gap="2em"
      justify="space-between"
    >
      <Icon name={icon} size="3em" color="#fff" />
      <Box
        className="service-text"
        direction="column"
        gap="0.5em"
        backgroundColor={"#0007"}
        rounded="0.5em"
        padding="1em 0.5em"
      >
        <Text fontSize={"xlg"} fontType="header" color="#fff" fontWeight="bold">
          {header}
        </Text>
        <Text fontSize={"sm"} fontType="header" color="#fff">
          {description}
        </Text>
      </Box>
    </AnimatedBorder>
  );
};
