import { Box, Text } from "../../components";
import React, { useCallback, useState } from "react";

import styled from "styled-components";

const AnimatedBorder = styled(Box)`
  overflow: hidden;
  border: 0.15em solid transparent;
  min-width: 320px;

  &:hover {
    cursor: pointer;
    border: 0.15em solid var(--primary-color);
    transition: 3s;
  }

  @media screen and (max-width: 360px) {
    min-width: 100%;
  }
`;

type ServiceCardProps = {
  id: string;
  header: string;
  description: string;
};

const OverLay = ({ id, description, header }: ServiceCardProps) => {
  return (
    <AnimatedBorder
      flex={1}
      direction="column"
      gap="1em"
      backgroundColor={"#0004"}
      rounded="1em"
      padding="1em"
      textAlign="center"
      position={{ position: "relative" }}
    >
      {/* <Box
        width="1em"
        height="150%"
        position={{ position: "absolute", top:-40 }}
        className="services-tag"
      >
        {""}
      </Box> */}
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
      >
        {description}
      </Text>
    </AnimatedBorder>
  );
};

export default React.memo(OverLay);
