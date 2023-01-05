import styled, { css } from "styled-components";

import React from "react";

const hoverStyle = css`
  transform: scale(0.9);
`;

interface TouchableProps {
  children: React.ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
  rounded?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
}

const StyledTouchable = styled.div<TouchableProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "inherit"};
  border-radius: ${(props) => props.rounded || "0"};
  cursor: pointer;
  transition: transform 0.2s;

  cursor: pointer;

  &:hover {
    scale: 0.95;
  }
`;

const Touchable: React.FC<TouchableProps> = (props) => {
  const { children, onClick, className, ...rest } = props;
  return (
    <StyledTouchable className={className} {...rest} onClick={onClick}>
      {children}
    </StyledTouchable>
  );
};

export default Touchable;
