import * as React from "react";

import styled from "styled-components";
import { useLocation } from "react-router";

interface Props {
  href: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const CustomLink: React.FunctionComponent<Props> = ({ href, children }) => {
  const { hash } = useLocation();

  return (
    <StyledLink href={href} className={hash === href ? "active" : ""}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a<Props>`
  color: var(--text-primary-color);

  &.active {
    color: var(--primary-color);
  }
`;

export default React.memo(CustomLink);
