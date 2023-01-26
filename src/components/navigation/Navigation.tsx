import SideNav, { SidenavHandle } from "../sidenav/SideNav";
import styled, { css } from "styled-components";

import Box from "../box/Box";
import CustomLink from "../custom-link/CustomLink";
import Icon from "../icon/Icon";
import Image from "../image/Image";
import React from "react";
import Text from "../text/Text";
import ToggleButton from "../toggle-btn/ToggleButton";
import Touchable from "../touchable/Touchable";
import images from "../../constants/images";
import { useTranslate } from "../../hooks";

const ResponsiveNavigation = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.75em 1em;
  background: var(--background-color);

  & .navigation-container {
    max-width: 1200px;
    margin-inline: auto;
  }

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  ${(props: { hasScrolled: boolean }) =>
    props.hasScrolled &&
    css`
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    `}

  & .menu {
    display: none;
  }
  @media screen and (max-width: 540px) {
    & .navigation {
      display: none;
    }

    & .menu {
      display: block;
    }
  }
`;

const Navigation = () => {
  const t = useTranslate();
  const [show, setShow] = React.useState(true);
  const sideRef = React.useRef<SidenavHandle>(null);

  const openSideNav = React.useCallback(() => {
    if (sideRef.current) {
      sideRef.current.toggle();
    }
  }, [sideRef.current]);

  const hide = React.useCallback(() => setShow((p) => !p), [show]);

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ResponsiveNavigation hasScrolled={hasScrolled}>
      <Box
        gap="1em"
        align="center"
        justify="space-between"
        flex={1}
        className="navigation-container"
      >
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
            <Text fontSize="md" fontType="header">
              {t("NAVIGATION_LINK_1")}.
            </Text>
          </CustomLink>
          <CustomLink href="#services" id="services">
            <Text fontSize="md" fontType="header">
              {t("NAVIGATION_LINK_2")}.
            </Text>
          </CustomLink>
          <CustomLink href="#projects" id="projects">
            <Text fontSize="md" fontType="header">
              {t("NAVIGATION_LINK_3")}.
            </Text>
          </CustomLink>
          <CustomLink href="#testimonial" id="testimonial">
            <Text fontSize="md" fontType="header">
              {t("NAVIGATION_LINK_4")}.
            </Text>
          </CustomLink>
          <CustomLink href="#contact" id="contact">
            <Text fontSize="md" fontType="header">
              {t("NAVIGATION_LINK_5")}.
            </Text>
          </CustomLink>
          <ToggleButton />
        </Box>
        {show ? (
          <Touchable className="menu" onClick={openSideNav}>
            <Icon name="menu" size="1.2em" color="var(--primary-color)" />
          </Touchable>
        ) : null}
      </Box>
    </ResponsiveNavigation>
  );
};

export default Navigation;
