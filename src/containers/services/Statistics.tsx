import { Box, Text } from "../../components";
import React, { useEffect, useMemo, useState } from "react";

import styled from "styled-components";
import { useTranslate } from "../../hooks";

type Props = {};

const Static = styled(Box)`
  @media screen and (max-width: 960px) {
    flex-direction: column;
    text-align: center;

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
  const t = useTranslate();
  return (
    <Static justify="space-between" gap="2em">
      <Box
        direction="column"
        flex={1}
        gap="1.5em"
        className="static-card"
        justify="flex-end"
      >
        <Box gap="2em" justify="space-between">
          <StaticCard number={2} suffix={t("STATIC_ONE")} />
          <StaticCard number={3} suffix={t("STATIC_TOW")} />
          <StaticCard number={20} suffix={t("STATIC_THREE")} />
        </Box>
        <Text fontSize={"lg"} fontType="header" color="#fff">
          {t("STATIC_CTA_TEXT")}{" "}
          <Text
            fontType="header"
            fontSize="none"
            fontWeight="bold"
            gradient="var(--primary-gradient)"
          >
            {t("STATIC_CTA_TEXT_COLOR")}
          </Text>
        </Text>
      </Box>

      <Box
        direction="column"
        gap="0.75em"
        flex={1}
        backgroundColor="var(--card-background)"
        rounded="0.5em"
        padding="1em"
      >
        <Text fontWeight="bold" fontSize={"xlg"} fontType="header" color="#fff">
          {t("STATIC_NAME")}
        </Text>
        <Text
          color="var(--text-secondary-color)"
          fontSize={"md"}
          fontType="header"
          lineHeight="1.5em"
        >
          {t("STATIC_DESCRIPTION")}
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
