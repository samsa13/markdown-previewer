import { InputAction, InputActionTypes } from "../../types/input";

export const setMarkdown = (input: string):InputAction => {
    return {
        type: InputActionTypes.INPUT,
        payload: input,
    }
}