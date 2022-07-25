import { combineReducers } from "redux";
import { inputReducer } from "./Input.reducer";


export const rootReducer = combineReducers({
    input: inputReducer,
})

export type RootState = ReturnType<typeof rootReducer>