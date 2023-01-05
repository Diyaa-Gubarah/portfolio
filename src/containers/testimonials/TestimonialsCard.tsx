import { Box, Image, Text } from "../../components";

import { ITestimonial } from "../../data/testimonials";
import React from "react";
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

type Props = { item: ITestimonial };

const TestimonialsCard: React.FC<Props> = ({ item }) => {
  return (
    <AnimatedCard
      direction="column"
      rounded="1em"
      backgroundColor="var(--card-background)"
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
        {`"${
          item.feedback.length > 150
            ? `${item.feedback.slice(0, 150)}...`
            : item.feedback
        }"`}
      </Text>
      <Image
        src={item.image}
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
          {item.name}
        </Text>
        <Text fontSize="sm" color="var(--text-primary-color)" fontType="header">
          {item.occupation}
        </Text>
      </Box>
    </AnimatedCard>
  );
};

export default TestimonialsCard;
