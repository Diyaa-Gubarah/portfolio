import { Box, Navigation, Text, Touchable } from "./components";
import { Home, Services } from "./containers";

import EmptySpan from "./components/empty-span/EmptySpan";
import React from "react";

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

const Main = (props: Props) => {
  return (
    <Box direction="column">
      <EmptySpan id="home" />
      <Navigation />
      <Home />
      <EmptySpan id="services" />.
      <Services />
      <EmptySpan id="projects" />
      {/* <Home /> */}
      <EmptySpan id="testimonial" />
      {/* <Home /> */}
      <EmptySpan id="contact" />
      {/* <Home /> */}
    </Box>
  );
};

export default Main;
