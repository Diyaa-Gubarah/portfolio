import * as React from "react";

import styled, { css } from "styled-components";

interface ListProps<T, P> {
  data?: T[];
  Item?: React.ComponentType<P>;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  size?: number;
  radius?: number;
  color?: string;
}

const ListWrapper = styled.div<ListProps<any, any>>`
  display: flex;
  flex-direction: ${(props) => props.direction};

  ::-webkit-scrollbar {
    width: ${(props) => props.size || 8}px;
    border-radius: ${(props) => props.radius || 4}px;
    background-color: ${(props) => props.color || "#F5F5F5"};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${(props) => props.radius || 4}px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.color || "#555"};
  }
`;

const List: React.FC<ListProps<any, any>> = ({ data, Item, ...props }) => {
  return (
    <ListWrapper {...props}>
      {data?.map((item) => Item && <Item key={item.id} item={item} />)}
    </ListWrapper>
  );
};

export default List;
