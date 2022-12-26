import { useState } from 'react';

// Define our type for the field value
type FieldValue = string | undefined;

// Define our type for the onChange handler
type OnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

// Define our hook return type
type UseFieldReturn = {
    value: FieldValue,
    onChange: OnChangeHandler,
    type: React.HTMLInputTypeAttribute
};

const useField = (inputType: React.HTMLInputTypeAttribute): UseFieldReturn => {
    // Create a state for our field value
    const [value, setValue] = useState<FieldValue>(undefined);

    // Return our value and a function for updating it
    return {
        value,
        type: inputType,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        }

    };
}

export default useField



