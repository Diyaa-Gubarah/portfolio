import { Box, Text } from "../../components";
import React, { useCallback, useState } from "react";

import styled from "styled-components";

const AnimatedBorder = styled(Box)`
  cursor: pointer;
  @media screen and (min-width: 330px) {
    min-width: 320px;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 1em;
  opacity: 0;

  overflow-y: scroll;
  scroll-behavior: smooth;

  /* Style the scrollbar */
  ::-webkit-scrollbar {
    width: 4px;
    /* background-color: #f5f5f5; */
  }

  /* Style the thumb (the part that you drag) */
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 10px;
    height: 50px; /* Set the thumb height to 50px */
  }

  /* Style the thumb hover state */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-secondary-color);
  }
`;

type ServiceCardProps = {
  id: string;
  header: string;
  description: string;
};

const OverLay = ({ id, description, header }: ServiceCardProps) => {
  const [current, setCurrent] = useState<unknown>(null);

  const getCurrentCard = useCallback(
    (id: unknown) => setCurrent(id),
    [current]
  );

  console.log(`current: ${current}`);
  return (
    <AnimatedBorder
      padding="1em"
      rounded="1em"
      flex={1}
      backgroundColor={`#0004`}
      gap="1em"
      position={{ position: "relative" }}
      onClick={() => getCurrentCard(id)}
    >
      <Box justify="center" align="center" width="auto">
        <Text
          fontSize={"lg"}
          fontType="header"
          color="var(--text-primary-color)"
          fontWeight="bold"
          textAlign="center"
        >
          {id}
        </Text>
      </Box>
      <Box
        flex={1}
        direction="column"
        gap="0.5em"
        backgroundColor={"#0007"}
        rounded="0.5em"
        padding="1em 0.5em"
      >
        <Text
          fontSize={"lg"}
          fontType="header"
          color="var(--text-primary-color)"
          fontWeight="bold"
        >
          {header}
        </Text>
        <Text
          fontSize={"md"}
          fontType="header"
          color="var(--text-secondary-color)"
          textAlign="left"
        >
          {description}
        </Text>
      </Box>
      <CardOverlay
        style={{ opacity: current === id ? 1 : 0 }}
        onClick={() => getCurrentCard(null)}
      >
        <Box direction="column" padding="1em" width="100%" height="100%">
          <Text
            fontSize={"md"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="left"
          >
            {description}
          </Text>
          <Text
            fontSize={"md"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="left"
          >
            {description}
          </Text>
          <Text
            fontSize={"md"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="left"
          >
            {description}
          </Text>
        </Box>
      </CardOverlay>
    </AnimatedBorder>
  );
};

export default React.memo(OverLay);
