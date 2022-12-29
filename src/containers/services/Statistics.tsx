import { Box, Text } from "../../components";
import React, { useEffect, useMemo, useState } from "react";

import styled from "styled-components";

type Props = {};

const Static = styled(Box)`
  @media screen and (max-width: 960px) {
    flex-direction: column;
    text-align: center;

    & .static-text {
      /* display: none; */
    }

    & .static-card {
      @media screen and (max-width: 450px) {
        & div {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
`;

const Statistics = (props: Props) => {
  return (
    <Static justify="space-between" gap="2em">
      <Box direction="column" flex={1} gap="1.5em" className="static-card" justify="flex-end">
        <Box gap="2em" justify="space-between">
          <StaticCard number={20} suffix="YEARS" />
          <StaticCard number={40} suffix="PROJECTS" />
          <StaticCard number={20} suffix="CLIENTS" />
        </Box>
        <Text fontSize={"lg"} fontType="header" color="#fff">
          I will bring passion, knowledge, and expertise to every project,you
          can trust that I will go above and beyond to{" "}
          <Text
            fontType="header"
            fontSize="none"
            fontWeight="bold"
            gradient="var(--primary-gradient)"
          >
            ENSURE YOUR SUCCESS.
          </Text>
        </Text>
      </Box>

      <Box
        direction="column"
        gap="0.75em"
        className="static-text"
        flex={1}
        backgroundColor={"#0004"}
        rounded="0.5em"
        padding="1em"
      >
        <Text fontWeight="bold" fontSize={"xlg"} fontType="header" color="#fff">
          Who's DIYAA?
        </Text>
        <Text
          color="var(--text-secondary-color)"
          fontSize={"md"}
          fontType="header"
          lineHeight="1.5em"
        >
          {`I graduated as a Surveying Engineer then turned Fullstack
          Freelancer, I have a diverse range of skills and experiences that make
          me a valuable asset to you, my background in surveying gives me a strong foundation in analysis and management, and my self-taught
          software development skills show my determination and dedication to
          learning new things, shifting careers is never easy, but I've worked
          hard and persevered to build a successful career as a freelancer.`}
        </Text>
      </Box>
    </Static>
  );
};

export default Statistics;

interface StaticCardProps {
  number: number;
  suffix: string;
}

const StaticCard: React.FC<StaticCardProps> = ({ number, suffix }) => {
  const numbers = Array.from({ length: number }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNumber = useMemo(() => numbers[currentIndex], [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < numbers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [currentNumber]);

  return (
    <Box direction="column" justify="center" align="flex-end">
      <Text
        fontSize={"lg"}
        fontType="header"
        gradient="var(--primary-gradient)"
      >
        +{`${currentNumber} `}
      </Text>
      <Text
        fontSize={"md"}
        fontType="header"
        gradient="var(--primary-gradient)"
      >
        {suffix}
      </Text>
    </Box>
  );
};
