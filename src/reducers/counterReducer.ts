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

