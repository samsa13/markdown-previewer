export interface InputState {
    input: string;
}

export enum InputActionTypes {
    INPUT='INPUT'
}

export interface InputAction {
    type: InputActionTypes.INPUT;
    payload: string;
}