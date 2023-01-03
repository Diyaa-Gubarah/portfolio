import { Box, Icon, Image, Text, Touchable } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const AnimatedCard = styled(Box)`
  overflow: hidden;
  position: relative;
  min-height: 300px;
  min-width: 330px;

  @media screen and (max-width: 380px) {
    min-width: 100%;
  }

  & .card-button {
    padding: 0.15em;
    align-items: center;
    justify-content: center;
    display: none;
    border-radius: 0.25em;
    background: var(--text-primary-color);
  }

  & .project-image {
    margin-left: auto;
    right: -10px;
    bottom: -12px;
    rotate: -5deg;
    position: absolute;
  }

  &:hover {
    .project-image {
      transition: 1s;
      margin-left: auto;
      right: 0;
      bottom: 0;
      rotate: 0deg;
      -webkit-rotate: 0deg;
    }
    .card-button {
      transition: 1s;
      display: inline-flex;
    }
  }
`;

type Props = { item: unknown };

const ProjectCard: React.FC<Props> = ({ item }) => {
  return (
    <AnimatedCard
      direction="column"
      rounded="1em"
      backgroundColor="#0003"
      padding="1em"
      flex={1}
    >
      <Box align="center" justify="space-between">
        <Box flex={1} direction="column">
          <Text
            fontSize="lg"
            color="var(--text-primary-color)"
            fontType="header"
            fontWeight="bold"
          >
            HOMELLA
          </Text>
          <Text
            fontSize="sm"
            color="var(--text-secondary-color)"
            fontType="header"
            fontWeight="bold"
          >
            Mobile App & Backend
          </Text>
        </Box>
        <Touchable
          onClick={() => {
            // console.log("open Project");
          }}
          className="card-button"
        >
          <Icon name="show" size="1.24em" color="var(--background)" />
        </Touchable>
      </Box>
      <Image
        className="project-image"
        src={images.personal}
        alt="project image showcase"
        width="90%"
        height="70%"
        objectFit="cover"
        borderRadius="0.5em 0"
        blind="lighten"
      />
    </AnimatedCard>
  );
};

export default ProjectCard;
