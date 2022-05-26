import { createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
    name: "sections",
    initialState: {
        bg: "#fdd242",
        text: 'Default Text'
    },
    reducers: {
        setBg: (state: any) => {
            state.bg = 'action.payload';
        }
    }
});

export const sectionsReducer = sectionsSlice.reducer;