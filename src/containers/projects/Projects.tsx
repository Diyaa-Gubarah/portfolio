import { Box, List, Text } from "../../components";

import { OFFERS } from "../../data";
import ProjectCard from "./ProjectCard";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Box direction="column" padding="3em 0" gap="3em" flex={1}>
      <Box direction="column" align="center" gap="0.75em">
        <Text
          fontWeight="bold"
          fontSize={"xlg"}
          fontType="header"
          color="var(--text-primary-color)"
          textAlign="center"
        >
          Projects
        </Text>
        <Text
          fontWeight="bold"
          fontSize={"md"}
          fontType="header"
          color="var(--text-secondary-color)"
          textAlign="center"
        >
          I have worked with a range of clients, from small startups to large
          corporations, and I can't wait to put your project on my list of
          successes.
        </Text>
      </Box>

      {/* Project Card */}

      <List
        renderItem={(item) => <ProjectCard item={item} />}
        data={OFFERS}
        gap="1.5em"
      />
    </Box>
  );
};

export default Projects;
