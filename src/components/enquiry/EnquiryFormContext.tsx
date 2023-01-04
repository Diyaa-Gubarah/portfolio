import React, { createContext, useContext } from "react";

import { OptionProps } from "../../data/questions";

export const EnquiryContext = createContext<Record<string, string>[]>([]);

type ContextProps = {
  children: React.ReactNode;
  value: Record<string, string>[];
};

const EnquiryFormContext = ({ children, value }: ContextProps) => {
  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
};

export default EnquiryFormContext;
