import {CounterItem, TsarType} from "../types/Counter";

export const counterReducer = (state: CounterItem, action: TsarType): CounterItem => {
    switch (action.type) {
        case "SET-START-VALUE":
            return {...state, startValue: action.payload.digit};

        case "SET-MAX-VALUE":
            return state;

        case "SET-CURRENT-VALUE":
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


export const setCurrentValue = (digit: number) => ({
    type: 'SET-CURRENT-VALUE',
    payload: {
        digit
    }
} as const)

