import { combineReducers } from "redux";
import { sectionsReducer } from "./sectionsReducer";

export const rootReducer = combineReducers({
    sections: sectionsReducer,
});