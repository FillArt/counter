import {CounterItem, TsarType} from "../types/Counter";

export const counterReducer = (state: CounterItem, action: TsarType): CounterItem => {
    switch (action.type) {
        case "SET-START-VALUE":
            return {...state, startValue: action.payload.digit};

        case "SET-MAX-VALUE":
            return {...state, maxValue: action.payload.digit};

        case "SET-CURRENT-VALUE": {
            return {...state, currentValue: state.startValue};
        }

        case "INCREMENT-CURRENT-VALUE": {
            return {...state, currentValue: state.currentValue++};
        }

        case "SET-ERROR-MESSAGE": {
            return {...state, error: action.payload.message};
        }

        case "RESET-STATE": {
            return {...state, currentValue: 0, maxValue: 0, startValue: 0, error: ''};
        }

        default:
            return state;
    }
}

export const setStartValue = (digit: number) => ({
    type: "SET-START-VALUE",
    payload: {digit}
} as const);

export const setMaxValue = (digit: number) => ({
    type: 'SET-MAX-VALUE',
    payload: {
        digit
    }
} as const);


export const setCurrentValue = () => ({
    type: 'SET-CURRENT-VALUE',
} as const)

export const incrementCurrentValue = () => ({
    type: 'INCREMENT-CURRENT-VALUE',
} as const)

export const setErrorMessage = (message: string) => ({
    type: 'SET-ERROR-MESSAGE',
    payload: {
        message
    }
} as const)

export const resetState = () => ({
    type: 'RESET-STATE',
} as const)
