import { Box, Image, Text } from "../../components";

import React from "react";
import Statistics from "./Statistics";
import images from "../../constants/images";

type Props = {};

const Services = (props: Props) => {
  return (
    <Box direction="column">
      <Statistics />
      <Box direction="column" padding="3em 0" align="center" gap="1em">
        <Text fontWeight="bold" fontSize={"xlg"} fontType="header" color="#fff">
          How I Can Help You?
        </Text>
        <Text fontSize={"md"} fontType="header" color="#fff" textAlign="center">
          As a JavaScript developer, I can provide a wide range of services to
          you.
        </Text>
        <Box flex={1} align="center" justify="center" margin="auto">
          <Image
            src={images.services}
            alt="my personal image"
            objectFit="cover"
            blind="lighten"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
