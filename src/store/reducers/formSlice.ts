import { Action, Dispatch, PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { postRequest } from '../../services';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const submitSuccess = createAction<string>('SUBMIT_SUCCESS');
export const submitFailure = createAction<string>('SUBMIT_FAILURE');





// TypeScript interfaces for the form data and server response
export interface FormState {
    first?: string;
    last?: string;
    message?: string;
    email?: string;
    loading?: boolean;
    error?: string | null;
}


const initialState: FormState = {
    first: '',
    last: '',
    message: '',
    email: '',
    loading: false,
    error: null,
};




export const submitForm = (formData: FormState) => async (dispatch: Dispatch) => {
    dispatch(actions.updateFirst(formData?.first));
    dispatch(actions.updateLast(formData?.last));
    dispatch(actions.updateMessage(formData?.message));
    dispatch(actions.updateEmail(formData?.email));
    dispatch(actions.setLoading(true));
    dispatch(actions.setError(null));

    await postRequest('https://jsonplaceholder.typicode.com/posts', formData)
        .then((res) => {
            console.log(res);
            // dispatch(actions.setLoading(false));
        })
        .catch((err) => {
            console.error(err);
            dispatch(actions.setError(err.message));
            // dispatch(actions.setLoading(false));
        });
    // dispatch(actions.setLoading(false));

};







const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFirst: (state, action: PayloadAction<string | undefined>) => {
            state.first = action.payload;
        },
        updateLast: (state, action: PayloadAction<string | undefined>) => {
            state.last = action.payload;
        },
        updateMessage: (state, action: PayloadAction<string | undefined>) => {
            state.message = action.payload;
        },
        updateEmail: (state, action: PayloadAction<string | undefined>) => {
            state.email = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});



export const { actions } = formSlice;

export default formSlice.reducer;


export const selectFirst = (state: RootState) => state.form.first
export const selectLast = (state: RootState) => state.form.last
export const selectEmail = (state: RootState) => state.form.email
export const selectMessage = (state: RootState) => state.form.message
export const selectLoading = (state: RootState) => state.form.loading
export const selectError = (state: RootState) => state.form.error

