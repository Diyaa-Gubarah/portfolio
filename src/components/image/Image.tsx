import styled, { css } from "styled-components";

import React from "react";

const Position = css<ImageProps>`
  ${(props) => props.position}
`;

type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";
type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: ObjectFit;
  className?: string;
  position?: {
    position: "relative" | "absolute" | "fixed";
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  };
  blind?: MixBlendMode;
  aspect?: string;
}

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  object-fit: ${(props) => props.objectFit};
  mix-blend-mode: ${(props) => props.blind};
  aspect-ratio: ${(props) => props.aspect};
  -webkit-mix-blend-mode: ${(props) => props.blind};
  -moz-mix-blend-mode: ${(props) => props.blind};
  -ms-mix-blend-mode: ${(props) => props.blind};

  ${(props) => props.position && Position};
`;

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  return <StyledImage className={className} src={src} alt={alt} {...props} />;
};

export default Image;
