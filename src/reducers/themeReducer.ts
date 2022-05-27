import { createSlice } from "@reduxjs/toolkit";

export type ThemeTypes = {
    bgColor: string;
    textColor: string;
}

const initialState: ThemeTypes = {
    bgColor: '#fdd242',
    textColor: '#062C30'
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setBgColor: (state: any, action: any) => {
            state.bgColor = action.payload.bgColor;
            state.textColor = action.payload.textColor;
            console.log(action.payload);

        }
    }
});

// Export reducer
export const themeReducer = themeSlice.reducer;

// Export all actions
export const { setBgColor } = themeSlice.actions;