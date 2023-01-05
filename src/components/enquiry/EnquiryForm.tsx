import React, { useCallback, useReducer } from "react";
import { formReducer, initialFormState } from "./EnquiryFormReducer";

import Box from "../box/Box";
import List from "../list/List";
import { OptionProps } from "../../data/questions";
import { QUESTIONS } from "../../data";
import Text from "../text/Text";
import Touchable from "../touchable/Touchable";
import { keyExists } from "../../utils/helper";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = { close: () => void };

const OptionWrapper = styled(motion.div)<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.15em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  min-width: max-content;

  background: ${(props) =>
    props.selected ? "var(--primary-color)" : "#f2f2f2"};

  & .option-text {
    font-weight: ${(props) => props.selected && "600"};
    color: ${(props) =>
      props.selected ? "var(--background-color)" : "--text-secondary-color"};
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
  const [{ summary, message }, dispatch] = useReducer(
    formReducer,
    initialFormState
  );

  const handleAddQuestion = useCallback(
    (question: OptionProps) => {
      dispatch({
        type: "ADD_QUESTION",
        payload: question,
      });
    },
    [dispatch]
  );

  const handleSendMessage = useCallback(() => {
    close();
  }, [summary]);

  return (
    <REnquiryForm
      direction="column"
      gap="3em"
      backgroundColor="#fff"
      rounded="0.5em"
      padding="2em"
      height="80%"
    >
      <Box direction="column" width="100%" gap="0.5em">
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
          <Box direction="column" gap="1em" width="100%" align="center">
            <Text
              fontSize={"md"}
              fontType="header"
              color="var(--background-color)"
              fontWeight="bold"
              textAlign="center"
            >
              {`${item.id}. ${item.question}`}
            </Text>
            <Box width="100%" justify="center">
              <List
                renderItem={(item) => (
                  <Option
                    data={summary}
                    item={item}
                    onClick={() => {
                      handleAddQuestion(item);
                    }}
                  />
                )}
                data={item.options}
                gap="0.5em"
              />
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
          onClick={handleSendMessage}
          backgroundColor={
            message ? "var(--primary-color)" : "var(--text-primary-color)"
          }
          className="form-btn"
        >
          {message ? (
            <a
              target={"_blank"}
              color="inherit"
              href={`https://wa.me/+249111228700?text=${message}`}
            >
              <Text
                fontSize={"sm"}
                fontType="header"
                color="var(--text-primary-color)"
                fontWeight="bold"
              >
                Send
              </Text>
            </a>
          ) : (
            <Text
              fontSize={"sm"}
              fontType="header"
              color="var(--text-secondary-color)"
              fontWeight="bold"
            >
              Answer Questions
            </Text>
          )}
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

export default React.memo(EnquiryForm);

const Option = ({
  item,
  onClick,
  data,
}: {
  item: OptionProps;
  onClick: (arg: any) => void;
  data: Record<string, string>[];
}) => {
  const selected = React.useMemo(
    () => keyExists(data, item.name),
    [item.name, data.length]
  );

  return (
    <OptionWrapper selected={selected} onClick={onClick}>
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
};
