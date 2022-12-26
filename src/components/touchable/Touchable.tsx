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
  hoverStyle?:
    | string
    | (string | number | false | (() => string | number | false))[];
  //     hoverStyle={`transform: scale(2); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)`}
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

  &:hover {
    ${(props) => props.hoverStyle || "transform: scale(1)"}
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
