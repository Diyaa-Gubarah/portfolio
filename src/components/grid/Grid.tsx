import styled, { css } from "styled-components";

import React from "react";

type GridAlignment = "start" | "end" | "center" | "stretch";
type GridFlow = "row" | "column" | "dense";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: string;
  rows?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  autoFlow?: GridFlow;
  justifyItems?: GridAlignment;
  alignItems?: GridAlignment;

  m_width?: string;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit,minmax(${props.m_width},1fr))`};
  grid-template-rows: ${(props) => props.rows};
  grid-gap: ${(props) => props.gap};
  grid-auto-flow: ${(props) => props.autoFlow};
  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const Grid: React.FC<GridProps> = ({ children, className, ...props }) => {
  return (
    <StyledGrid className={className} {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
