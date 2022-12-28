import * as React from "react";

import styled, { css } from "styled-components";

const Position = css<BoxProps>`
  ${(props) => props.position}
`;

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  fontSize?: string;
  gap?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  self?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  position?: {
    position: "relative" | "absolute" | "fixed";
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  };
  rounded?: string;
  flex?: number;
  onClick?: (arg: unknown) => void;
}

const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  align-self: ${(props) => props.self};
  flex-wrap: ${(props) => props.wrap};
  background: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.rounded};
  gap: ${(props) => props.gap};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.position && Position};
`;

const Box: React.FC<BoxProps> = ({ children, onClick, className, ...rest }) => {
  return (
    <Container onClick={onClick} className={className} {...rest}>
      {children}
    </Container>
  );
};

export default Box;
