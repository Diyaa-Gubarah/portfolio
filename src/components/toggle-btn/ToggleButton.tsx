import React, { ChangeEvent, useCallback, useState } from "react";

import Box from "../box/Box";
import Text from "../text/Text";
import i18n from "../../i18n/i18n";
import styled from "styled-components";

type Props = {};

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 2.5em;
  /* height: 75%; */
  background: ${({ checked }) =>
    checked ? "var(--primary-color)" : "var(--text-primary-color)"};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? 0 : "50%")};
    bottom: 0;
    margin-inline: auto;
    width: 50%;
    height: 100%;
    background: ${({ checked }) =>
      !checked ? "var(--primary-color)" : "var(--text-primary-color)"};
    border-radius: 50%;
    transition: 0.3s;
  }
`;

function ToggleButton({}: Props) {
  const [switchState, setSwitchState] = useState(true);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      i18n.changeLanguage(switchState ? "ar" : "en");
      const container = document.getElementById("root");
      container?.setAttribute("dir", switchState ? "rtl" : "ltr");
      setSwitchState(!switchState);
    },
    [switchState]
  );

  return (
    <Box width="100%" gap="0.25em" align="center">
      <StyledLabel htmlFor="checkbox" checked={switchState}>
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={handleOnChange}
        />
      </StyledLabel>
      <Text fontSize="sm" color="var(--primary-color)">
        {switchState ? "AR" : "EN"}
      </Text>
    </Box>
  );
}

export default ToggleButton;
