import React, { useCallback, useState } from "react";

import Box from "../box/Box";
import List from "../list/List";
import Text from "../text/Text";
import Touchable from "../touchable/Touchable";
import { motion } from "framer-motion";
import styled from "styled-components";

const OptionData = [
  { id: "1", option: "option 1", value: "op1" },
  { id: "2", option: "option 2", value: "op3" },
  { id: "3", option: "option 3", value: "op3" },
  { id: "4", option: "option 4", value: "op4" },
  { id: "5", option: "option 5", value: "op5" },
];

type Props = { close: () => void };

const OptionWrapper = styled(motion.div)<{ current: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.15em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  background: ${(props) =>
    props.current ? "var(--primary-color)" : "#f2f2f2"};
  min-width: max-content;

  & .option-text {
    color: ${(props) =>
      props.current ? "var(--background)" : "--text-secondary-color"};
  }
`;

const REnquiryForm = styled(Box)`
  max-width: 700px;
  width: 60%;
  overflow-y: scroll;
  position: relative;

  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & .enquiry-form-item {
    text-align: left;
  }

  & .form-btn-container {
    .form-btn {
      padding: 0.25em 0.5em;
      flex: 1;
      text-align: center;
    }
  }

  @media screen and (max-width: 580px) {
    width: 90%;
    padding: 2em 1em;
  }
`;

function EnquiryForm({ close }: Props) {
  return (
    <REnquiryForm
      direction="column"
      gap="2em"
      backgroundColor="#fff"
      rounded="0.5em"
      padding="2em"
      height="80%"
    >
      <Box direction="column" width="100%" gap="1em">
        <Text
          fontSize={"lg"}
          fontType="header"
          gradient="var(--primary-gradient)"
          fontWeight="bold"
          textAlign="center"
        >
          Let's Get Started
        </Text>
        <Text
          fontSize={"sm"}
          fontType="header"
          gradient="var(--text-secondary-color)"
          fontWeight="bold"
          textAlign="center"
        >
          Time is important, help me understand your idea by answer this simple
          questions.
        </Text>
      </Box>

      {React.Children.toArray(
        Array.from("diyaayahya").map(() => (
          <Box
            direction="column"
            gap="0.75em"
            width="100%"
            className="enquiry-form-item"
          >
            <Text
              fontSize={"sm"}
              fontType="header"
              color="var(--text-secondary-color)"
              fontWeight="bold"
            >
              1. What's Your Project Type
            </Text>
            <List Item={Option} data={OptionData} gap="0.5em" />
          </Box>
        ))
      )}
      <Box
        gap="1em"
        align="center"
        justify="space-between"
        className="form-btn-container"
      >
        <Touchable
          rounded="0.25em"
          onClick={() => {}}
          backgroundColor="var(--primary-color)"
          className="form-btn"
        >
          <Text
            fontSize={"sm"}
            fontType="header"
            color="var(--text-primary-color)"
            fontWeight="bold"
          >
            Send
          </Text>
        </Touchable>
        <Touchable rounded="0.25em" onClick={close} className="form-btn">
          <Text
            fontSize={"sm"}
            fontType="header"
            color="var(--primary-color)"
            fontWeight="bold"
          >
            Cancel
          </Text>
        </Touchable>
      </Box>
    </REnquiryForm>
  );
}

export default EnquiryForm;

type OptionProps = { item: typeof OptionData[0] };

const Option = React.memo(({ item }: OptionProps) => {
  const [op, setOp] = useState<string>("");
  const selectedOption = useCallback(
    (id: string) => {
      setOp(id);
    },
    [op]
  );

  console.log(item.id === op);

  return (
    <OptionWrapper
      onClick={() => selectedOption(item.id)}
      current={item.id === op}
    >
      <Text
        fontSize={"sm"}
        fontType="header"
        color="var(--text-secondary-color)"
        textAlign="center"
        className="option-text"
      >
        {item.option}
      </Text>
    </OptionWrapper>
  );
});
