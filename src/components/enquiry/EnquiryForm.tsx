import React, { useCallback, useState } from "react";

import Box from "../box/Box";
import List from "../list/List";
import { OptionProps } from "../../data/questions";
import { QUESTIONS } from "../../data";
import Text from "../text/Text";
import Touchable from "../touchable/Touchable";
import { formReducer } from "./EnguiryFormReducer";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = { close: () => void };

const OptionWrapper = styled(motion.div)<{}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.15em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  min-width: max-content;

  background: ${(props) => "#f2f2f2"};

  & .option-text {
    color: ${(props) => "--text-secondary-color"};
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
  const [{ summary }, dispatch] = React.useReducer(formReducer, {
    summary: [],
  });

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
        QUESTIONS.map((item) => (
          <Box
            direction="column"
            gap="0.75em"
            width="100%"
            align="center"
            onClick={() => dispatch({ type: "ADD_QUESTION", payload: item })}
          >
            <Text
              fontSize={"sm"}
              fontType="header"
              color="var(--background-color)"
              fontWeight="bold"
            >
              {item.question}
            </Text>
            <Box width="100%" justify="center">
              <List Item={Option} data={item.options} gap="0.5em" />
            </Box>
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

const Option = React.memo(({ item }: { item: OptionProps }) => {
  const [answer, setAnswer] = useState<OptionProps | null>(null);

  const onQuestionAnswerSelected = useCallback(
    (item: OptionProps) => {
      setAnswer(item);
    },
    [answer]
  );

  console.log(answer)

  return (
    <OptionWrapper onClick={() => onQuestionAnswerSelected(item)}>
      <Text
        fontSize={"sm"}
        fontType="header"
        color="var(--background-color)"
        textAlign="center"
        className="option-text"
      >
        {item?.name}
      </Text>
    </OptionWrapper>
  );
});
