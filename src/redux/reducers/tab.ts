import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store-config.ts";

export type TabState = {
    tabIndex: number,
}
const initialState: TabState = {
    tabIndex: -1,
}

const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        setTabIndex: (state, action) => ({
            ...state,
            tabIndex: action.payload,
        }),
    }
});

export function getTabIndex(state: RootState) {
    return state.tab.tabIndex
}

export const {
    setTabIndex
} = tabSlice.actions
export default tabSlice.reducer;
