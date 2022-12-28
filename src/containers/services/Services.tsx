import { Box, Text } from "../../components";

import { OFFERS } from "../../data";
import OverLay from "./OverLay";
import React from "react";
import Statistics from "./Statistics";

type Props = {};

const Services = (props: Props) => {
  return (
    <Box direction="column">
      <Statistics />
      <Box direction="column" padding="3em 0" align="center" gap="2em">
        <Box direction="column" gap="0.75em">
          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="center"
          >
            How I Can Help You?
          </Text>
          <Text
            fontSize={"md"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="center"
          >
            As a JavaScript developer, I can provide a wide range of services to
            you.
          </Text>
        </Box>

        {/* Services Card */}
        <Box
          flex={1}
          justify="space-between"
          margin="auto"
          gap="1em"
          wrap="wrap"
        >
          {React.Children.toArray(
            OFFERS.map((item) => (
              <OverLay
                id={item.id}
                header={item.header}
                description={item.description}
              />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
