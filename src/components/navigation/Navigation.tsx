import SideNav, { SidenavHandle } from "../sidenav/SideNav";

import Box from "../box/Box";
import CustomLink from "../custom-link/CustomLink";
import Icon from "../icon/Icon";
import Image from "../image/Image";
import React from "react";
import Text from "../text/Text";
import Touchable from "../touchable/Touchable";
import images from "../../constants/images";
import styled from "styled-components";

const ResponsiveNavigation = styled(Box)`
  & .menu {
    display: none;
  }
  @media screen and (max-width: 470px) {
    & .navigation {
      display: none;
    }

    & .menu {
      display: block;
    }
  }
`;

const Navigation = () => {
  const [show, setShow] = React.useState(true);
  const sideRef = React.useRef<SidenavHandle>(null);

  const openSideNav = React.useCallback(() => {
    if (sideRef.current) {
      sideRef.current.toggle();
    }
  }, [sideRef.current]);

  const hide = React.useCallback(() => setShow((p) => !p), [show]);

  return (
    <ResponsiveNavigation gap="1em" align="center" justify="space-between">
      <SideNav ref={sideRef} toggleMenu={hide} />
      <Image
        alt="Logo"
        src={images.logo}
        width="1.75em"
        height="1.75em"
        objectFit="contain"
      />
      <Box gap="1em" className="navigation">
        <CustomLink href="#home" id="home">
          <Text fontSize='md' fontType="header">
            Me.
          </Text>
        </CustomLink>
        <CustomLink href="#services" id="services">
          <Text fontSize='md' fontType="header">
            Services.
          </Text>
        </CustomLink>
        <CustomLink href="#projects" id="projects">
          <Text fontSize='md' fontType="header">
            Projects.
          </Text>
        </CustomLink>
        <CustomLink href="#testimonial" id="testimonial">
          <Text fontSize='md' fontType="header">
            Testimonial.
          </Text>
        </CustomLink>
        <CustomLink href="#contact" id="contact">
          <Text fontSize='md' fontType="header">
            Contact.
          </Text>
        </CustomLink>
      </Box>
      {show ? (
        <Touchable
          className="menu"
          hoverStyle={`transform: scale(1.2); `}
          onClick={openSideNav}
        >
          <Icon name="menu" size="1.2em" color="var(--primary-color)" />
        </Touchable>
      ) : null}
    </ResponsiveNavigation>
  );
};

export default Navigation;
