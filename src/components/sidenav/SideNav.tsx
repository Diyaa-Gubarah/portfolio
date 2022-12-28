import React, {
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Box from "../box/Box";
import CustomLink from "../custom-link/CustomLink";
import { HiMenuAlt3 } from "react-icons/hi";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import Touchable from "../touchable/Touchable";
import styled from "styled-components";

interface SidenavProps {
  ref: Ref<SidenavHandle>;
  toggleMenu: () => void;
}

export interface SidenavHandle {
  toggle: () => void;
}

const SidenavContainer = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  z-index: 4;
  /* transition: transform 0.3s ease-out; */

  background-image: linear-gradient(
    111.1deg,
    rgba(0, 40, 70, 1) -4.8%,
    rgba(91,21,55,1) 82.7%,
    rgba(255, 175, 123, 1) 97.2%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (min-width: 541px) {
    display: none;
  }
`;

const SideNav: React.ForwardRefRenderFunction<unknown, SidenavProps> = (
  { toggleMenu },
  ref
): JSX.Element | null => {
  const [show, setShow] = useState(false);

  const toggleSidenav = () => {
    setShow((prevShow) => !prevShow);
    toggleMenu();
  };

  useImperativeHandle(ref, () => ({
    toggle: toggleSidenav,
  }));

  return show ? (
    <SidenavContainer backgroundColor="#0008" padding="1em 0.75em">
      <Box position={{ position: "absolute" }}>
        <Touchable
          className="menu"
          hoverStyle={`transform: scale(1.2); `}
          onClick={toggleSidenav}
        >
          <Icon name="close" color="var(--primary-color)" size="1.2em" />
        </Touchable>
      </Box>
      <Box gap="0.75em" direction="column" width="80%" margin="auto auto">
        <CustomLink href="#home" id="home">
          <Text fontSize="md" fontType="header">
            Me.
          </Text>
        </CustomLink>
        <CustomLink href="#services" id="services">
          <Text fontSize="md" fontType="header">
            Services.
          </Text>
        </CustomLink>
        <CustomLink href="#projects" id="projects">
          <Text fontSize="md" fontType="header">
            Projects.
          </Text>
        </CustomLink>
        <CustomLink href="#testimonial" id="testimonial">
          <Text fontSize="md" fontType="header">
            Testimonial.
          </Text>
        </CustomLink>
        <CustomLink href="#contact" id="contact">
          <Text fontSize="md" fontType="header">
            Contact.
          </Text>
        </CustomLink>
      </Box>
    </SidenavContainer>
  ) : null;
};

export default React.forwardRef(SideNav);
