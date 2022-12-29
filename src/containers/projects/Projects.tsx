import { Box, Icon, Image, List, Text, Touchable } from "../../components";

import { OFFERS } from "../../data";
import ProjectCard from "./ProjectCard";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

type Props = {};

const data = [{ id: 1, name: "Item 1", title: "jhj gjgjgjghj" }];
const Item: React.FC<{ item: typeof data[0] }> = ({ item }) => (
  <Touchable
    hoverStyle={`transform: scale(0.95);`}
    onClick={() => console.log("clicked")}
  >
    <Text color="#fff" fontSize="lg" fontWeight="bold">
      {item.title}
    </Text>
  </Touchable>
);

const Projects = (props: Props) => {
  return (
    <Box direction="column" padding="3em 0" gap="2em">
      <Box direction="column" align="center" gap="1em">
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
      <Box flex={1} justify="space-between" margin="auto" gap="1.5em" wrap="wrap">
        {React.Children.toArray(OFFERS.map((item) => <ProjectCard />))}
      </Box>
    </Box>
  );
};

export default Projects;
