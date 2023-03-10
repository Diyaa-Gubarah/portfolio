import { Box, Icon, Image, Text, Touchable } from "../../components";

import { IProject } from "../../data/projects";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";
import { useTranslate } from "../../hooks";

const AnimatedCard = styled(Box)`
  overflow: hidden;
  position: relative;
  min-height: 300px;
  min-width: 330px;

  @media screen and (max-width: 380px) {
    min-width: 100%;

    & .skills-container {
      gap: 0.35em;
    }
    & .project-title {
      font-size: 1.1rem;
    }

    & .project-skills {
      font-size: 0.6rem;
    }
  }

  & .card-button {
    padding: 0.1em;
    align-items: center;
    justify-content: center;
    display: none;
    border-radius: 0.25em;
    background: var(--text-primary-color);
    position: absolute;
    right: 0;
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
      display: flex;
    }
  }
`;

type Props = { item: IProject; onClick: () => void };

const ProjectCard: React.FC<Props> = ({ item, onClick }) => {
  const t = useTranslate()
  return (
    <AnimatedCard
      direction="column"
      rounded="1em"
      backgroundColor="var(--card-background)"
      padding="1em"
      flex={1}
    >
      <Box flex={1} direction="column" position={{ position: "relative" }}>
        <Box>
          <Text
            fontSize="lg"
            color="var(--text-primary-color)"
            fontType="header"
            fontWeight="bold"
            className="project-title"
          >
            {t(item.title)}
          </Text>
          <Touchable onClick={onClick} className="card-button">
            <Icon name="show" size="1.24em" color="var(--background)" />
          </Touchable>
        </Box>

        <Box gap="0.5em" className="skills-container">
          {React.Children.toArray(
            item.fields.map((hash) => (
              <Text
                fontSize="sm"
                color="var(--text-secondary-color)"
                fontType="header"
                fontWeight="bold"
                className="project-skills"
              >
                {hash}
              </Text>
            ))
          )}
        </Box>
      </Box>
      <Image
        className="project-image"
        src={item.image}
        alt="project image showcase"
        width="90%"
        height="70%"
        objectFit="cover"
        borderRadius="0.5em 0"
      />
    </AnimatedCard>
  );
};

export default ProjectCard;
