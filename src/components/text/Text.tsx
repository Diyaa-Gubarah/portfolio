import styled, { css } from "styled-components";

import React from "react";

export const FONT_SIZE = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xlg: "1.75rem",
  none: "inherit",
};

type TextAlign = "left" | "right" | "center" | "justify";

interface TextProps {
  color?: string;
  fontSize: "sm" | "md" | "lg" | "xlg" | "none";
  textAlign?: TextAlign | string;
  fontWeight?: string;
  gradient?: string;
  fontType?: "header" | "body";
  children: React.ReactNode;
  className?: string;
  lineHeight?: string;
}

const gradientStyles = css<TextProps>`
  background: ${(props) => props.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText = styled.span<TextProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => FONT_SIZE[props.fontSize]};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => (props.fontType === "body" ? "Roboto" : "Poppins")};
  ${(props) => props.gradient && gradientStyles}
`;

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <StyledText className={className} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
