import { OptionProps, Question } from "../../data/questions";

type ACTION = { type: "ADD_QUESTION"; payload: Question };

type STATE = {
  summary: Record<string, OptionProps>[];
};

export const formReducer = (state: STATE, action: ACTION): STATE => {
  switch (action.type) {
    case "ADD_QUESTION":
      const exists = state.summary.find(
        (ques) => ques[action.payload.question]
      );

      const copy = exists
        ? [...state.summary.filter((ques) => !ques[action.payload.question])]
        : [
            ...state.summary,
            {
              [action.payload.question]: action.payload.options[0],
            },
          ];

      return {
        ...state,
        summary: [...copy],
      };

    default:
      return state;
  }
};
