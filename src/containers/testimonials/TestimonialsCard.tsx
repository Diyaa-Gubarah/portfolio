import { Box, Image, Text } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const AnimatedCard = styled(Box)`
  overflow: hidden;
  position: relative;
  min-height: 330px;
  min-width: 330px;

  @media screen and (max-width: 380px) {
    min-width: 100%;
  }

  &:hover {
  }
`;

type Props = { item: unknown };

const TestimonialsCard: React.FC<Props> = ({ item }) => {
  return (
    <AnimatedCard
      direction="column"
      rounded="1em"
      backgroundColor="#0003"
      padding="1em"
      flex={1}
      align="center"
      justify="space-between"
      gap="1em"
    >
      <Text
        fontSize="md"
        gradient="var(--primary-gradient)"
        fontType="header"
        textAlign="center"
        className="test-quote"
      >
        " waladi diyaa ma'f zaio salat alnabi alio, heares nehal kman
        insha'allah w yakhlevo sepyan w/ banat. "
      </Text>
      <Image
        src={images.personal}
        alt="project image showcase"
        width="35%"
        height="35%"
        objectFit="cover"
        borderRadius="50%"
        blind="lighten"
      />
      <Box direction="column" textAlign="center" gap="0.25em">
        <Text
          fontSize="lg"
          color="var(--text-secondary-color)"
          fontType="header"
          fontWeight="bold"
        >
          Nadia Khalil
        </Text>
        <Text fontSize="sm" color="var(--text-primary-color)" fontType="header">
          FED, at Homella
        </Text>
      </Box>
    </AnimatedCard>
  );
};

export default TestimonialsCard;
