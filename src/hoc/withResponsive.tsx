import * as React from "react";

import { Box } from "../components";
import styled from "styled-components";

const Responsive = styled(Box)`
  @media screen and (max-width: 570px) {
  }
`;

function withResponsive<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.FunctionComponent<P>
): React.FunctionComponent<P> {
  return function (props: P) {
    return (
      <Responsive>
        <WrappedComponent {...props} />
      </Responsive>
    );
  };
}

export default withResponsive;
