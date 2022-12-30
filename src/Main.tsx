import { Box, Navigation } from "./components";
import { Contacts, Home, Projects, Services, Testimonials } from "./containers";

import EmptySpan from "./components/empty-span/EmptySpan";
import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <Box direction="column">
      <EmptySpan id="home" />
      <Navigation />
      <Home />
      <EmptySpan id="services" />.
      <Services />
      <EmptySpan id="projects" />
      <Projects />
      <EmptySpan id="testimonial" />
      <Testimonials />
      <EmptySpan id="contact" />
      <Contacts />
    </Box>
  );
};

export default Main;
