import { Box, List, Text } from "../../components";
import { OFFERS, TESTIMONIALS } from "../../data";

import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { useTranslate } from "../../hooks";

type Props = {};

const Testimonials = (props: Props) => {
  const t = useTranslate();
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
          {t("TESTIMONIALS_TEXT")}{" "}
          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            gradient="var(--primary-gradient)"
            textAlign="center"
          >
            {t("TESTIMONIALS_TEXT_COLOR")}
          </Text>
        </Text>
        <Text
          fontWeight="bold"
          fontSize={"md"}
          fontType="header"
          color="var(--text-secondary-color)"
          textAlign="center"
        >
          {t("TESTIMONIALS_TEXT_DESCRIPTION")}
        </Text>
      </Box>

      {/* Project Card */}

      <List
        renderItem={(item) => <TestimonialsCard item={item} />}
        data={TESTIMONIALS}
        gap="1.5em"
      />
    </Box>
  );
};

export default Testimonials;
