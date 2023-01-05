import { Box, Icon, Image, Text, Touchable } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const ResponsiveProjectDetails = styled(Box)`
  max-width: 700px;
  width: 60%;
  overflow-y: scroll;
  position: relative;

  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 580px) {
    width: 90%;
  }
`;

type Props = { item: unknown; close: () => void };

function ProjectDetails({ close, item }: Props) {
  return (
    <ResponsiveProjectDetails
      backgroundColor="var(--background-color)"
      padding="1em"
      rounded="1em"
      gap="2em"
      direction="column"
      height="80%"
      textAlign="center"
    >
      <Box width="100%" align="flex-start" gap="0.5em" direction="column">
        <Box gap="1.5em" justify="space-between" align="center" width="100%">
          <Text
            fontSize="lg"
            color="var(--text-primary-color)"
            fontType="header"
            fontWeight="bold"
            textAlign="left"
          >
            Homella Application
          </Text>
          <Touchable onClick={close}>
            <Icon name="close" size="1.24em" color="#fff" />
          </Touchable>
        </Box>
        <Box gap="0.25em" wrap="wrap" align="center">
          {React.Children.toArray(
            Array.from("jhgjkjh kjh").map(() => (
              <Box>
                <Text
                  fontSize="sm"
                  color="var(--text-secondary-color)"
                  fontType="header"
                  fontWeight="bold"
                >
                  #styled-components
                </Text>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Image
        alt="project image"
        src={images.personal}
        height="60%"
        width="100%"
        objectFit="cover"
        borderRadius="1em"
        blind="lighten"
      />
      <Text fontSize="sm" color="var(--text-primary-color)" fontType="header">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore facilis
        laboriosam vitae adipisci rem reprehenderit eveniet omnis laudantium
        dignissimos porro nobis earum, quaerat, totam ducimus a. Molestiae
        consectetur ab dolorem. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Labore facilis laboriosam vitae adipisci rem
        reprehenderit eveniet omnis laudantium dignissimos porro nobis earum,
        quaerat, totam ducimus a. Molestiae consectetur ab dolorem! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Labore facilis laboriosam
        vitae adipisci rem reprehenderit eveniet omnis laudantium dignissimos
        porro nobis earum, quaerat, totam ducimus a. Molestiae consectetur ab
        dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Labore facilis laboriosam vitae adipisci rem reprehenderit eveniet omnis
        laudantium dignissimos porro nobis earum, quaerat, totam ducimus a.
        Molestiae consectetur ab dolorem!
      </Text>
      <Box justify="space-around">
        <Touchable onClick={close}>
          <a
            target={"_blank"}
            color="inherit"
            href={`https://wa.me/+249111228700?text=${"kjhk"}`}
          >
            <Text
              fontSize="md"
              color="var(--primary-color)"
              fontType="header"
              fontWeight="bold"
            >
              Go Live
            </Text>
          </a>
        </Touchable>
        <Touchable onClick={close}>
          <a
            target={"_blank"}
            color="inherit"
            // href={`https://wa.me/+249111228700?text=${message}`}
          >
            <Text
              fontSize="md"
              color="var(--text-secondary-color)"
              fontType="header"
              fontWeight="bold"
            >
              Source
            </Text>
          </a>
        </Touchable>
      </Box>
    </ResponsiveProjectDetails>
  );
}

export default ProjectDetails;
