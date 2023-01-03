import { OptionProps, Question } from "../../data/questions";

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
      const ifExist = state.summary.find(
        (ques) => ques[action.payload.question]
      );
      const modified = ifExist
        ? state.summary.filter((ques) => !ques[action.payload.question])
        : [
            ...state.summary.concat({
              [action.payload.question]: action.payload.name,
            }),
          ];
      const msg = concatenate(modified);
      return {
        ...state,
        summary: [...modified],
        message: msg,
      };

    default:
      return state;
  }
};
