import { Box, Text } from "../../components";
import React, { useEffect, useMemo, useState } from "react";

import styled from "styled-components";

type Props = {};

const Static = styled(Box)`
  @media screen and (max-width: 640px) {
    flex-direction: column;
    text-align: center;

    & .static-card {
      flex: 1;
      justify-content: space-between;
      gap: 1em;

      @media screen and (max-width: 410px) {
        flex-direction: column;
        align-items: center;

        & div {
          align-items: center;
        }
      }
    }
  }
`;

const Statistics = (props: Props) => {
  return (
    <Static justify="space-between" gap="2em">
      <Box direction="column" gap="0.5em" justify="center">
        <Text fontWeight="bold" fontSize={"xlg"} fontType="header" color="#fff">
          Statistics
        </Text>
      </Box>
      <Box gap="2em" justify="flex-end" className="static-card">
        <StaticCard number={20} prefix="YEARS" suffix="Experiences" />
        <StaticCard number={40} prefix="PROJECTS" suffix="Completed" />
        <StaticCard number={20} prefix="HAPPY" suffix="Clients" />
      </Box>
    </Static>
  );
};

export default Statistics;

interface StaticCardProps {
  number: number;
  prefix: string;
  suffix: string;
}

const StaticCard: React.FC<StaticCardProps> = ({ number, prefix, suffix }) => {
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
        {prefix}
      </Text>
      <Text fontSize={"md"} fontType="header" color="#fff">
        {suffix}
      </Text>
    </Box>
  );
};
