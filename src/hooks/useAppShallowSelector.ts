import { TypedUseSelectorHook, shallowEqual, useSelector } from "react-redux";

import { RootState } from "../store/store";

// Use throughout your app instead of plain `useSelector`
const useAppShallowSelector: TypedUseSelectorHook<RootState> = (selector: (arg: RootState) => any) => {
    return useSelector(selector, shallowEqual);
};

export default useAppShallowSelector