import * as React from "react";

import styled from "styled-components";

interface ListProps<T, P> {
  data?: T[];
  Item?: React.ComponentType<P>;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: string;
}

const ListWrapper = styled.div<ListProps<any, any>>`
  display: flex;
  align-items: center;

  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};

  overflow-x: scroll;
  scroll-snap-align: start; // add !important flag
  scroll-snap-type: x mandatory;
  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* set width to accommodate all items */
  width: 100%;
`;

const List: React.FC<ListProps<any, any>> = ({ data, Item, ...props }) => {
  return (
    <ListWrapper {...props}>
      {data?.map((item) => Item && <Item key={item.id} item={item} />)}
    </ListWrapper>
  );
};

export default List;
