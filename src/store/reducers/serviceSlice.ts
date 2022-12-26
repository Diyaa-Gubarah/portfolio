import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from './../store';
import { getRequest } from "../../services";

export type Service = {
    id: number;
    title: string;
    body: string;
    url?: string
};


// features/services/todoSlice.ts

type ServicesState = {
    loading: boolean;
    error: string | null;
    list: Service[];
};

const initialState: ServicesState = {
    list: [],
    error: null,
    loading: false
};


export function fetchServices() {
    return async (dispatch: Dispatch) => {
        dispatch(actions.fetchServiceStart());
        try {
            const response = await getRequest('https://jsonplaceholder.typicode.com/posts');

            dispatch(actions.fetchServiceSuccess(response));
        } catch (error) {
            dispatch(actions.fetchServiceFailure('Fetching Services Failed'));
        }
    };
}

export const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        fetchServiceStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchServiceSuccess(state, action: PayloadAction<Service[]>) {
            state.loading = false;
            state.list = action.payload;
        },
        fetchServiceFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export default servicesSlice.reducer;
export const { actions } = servicesSlice;

export const selectServices = (state: RootState) => state.services.list
export const selectServicesLoading = (state: RootState) => state.services.loading
export const selectServicesError = (state: RootState) => state.services.error