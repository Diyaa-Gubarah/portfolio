import { Box, Grid, Text } from "../../components";

import { OFFERS } from "../../data";
import OverLay from "./OverLay";
import React from "react";
import Statistics from "./Statistics";
import { t } from "i18next";
import { useTranslate } from "../../hooks";

type Props = {};

const Services = (props: Props) => {
  const t = useTranslate();
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
            {t("SERVICES_HEADER")}
          </Text>
          <Text
            fontSize={"md"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="center"
          >
            {t("SERVICES_DES")}
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
                count={item.count}
                header={t(item.header)}
                description={t(item.description)}
              />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
