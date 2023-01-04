import { OptionProps } from "../../data/questions";
import { concatenate } from "../../utils/helper";

type ACTION = { type: "ADD_QUESTION"; payload: OptionProps };

type STATE = {
  summary: Record<string, string>[];
  message: unknown;
};

export const initialFormState: STATE = {
  summary: [],
  message: null,
};

export const formReducer = (
  state = initialFormState,
  action: ACTION
): STATE => {
  switch (action.type) {
    case "ADD_QUESTION":
      const key = action.payload.question;
      const value = action.payload.name;
      const ifQuestionExist = state.summary.find((ques) => {
        return ques[key];
      });

      const ifAnswerExist = ifQuestionExist?.[key] === value;

      console.log(
        `ifQuestionExist :${ifQuestionExist !== undefined}`,
        `ifAnswerExist :${ifAnswerExist}`
      );

      const modified = ifQuestionExist
        ? state.summary.filter((ques) => !ques[key])
        : [
            ...state.summary.concat({
              [key]: value,
            }),
          ];
      const msg = concatenate(modified);

      // console.log(JSON.stringify(modified));
      return {
        ...state,
        summary: [...modified],
        message: msg,
      };

    default:
      return state;
  }
};
