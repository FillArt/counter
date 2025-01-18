import {CounterItem, TsarType} from "../types/Counter";

export const counterReducer = (state: CounterItem, action: TsarType) => {
    switch (action.type) {
        case "SET-START-VALUE":
            return state;

        case "SET-MAX-VALUE":
            return state;

        case "SET-CURRENT-VALUE":
            return state;
    }
}

export const setStartValue = (digit: number) => {
    return {
        type: "SET-START-VALUE",
        payload: {
            digit
        }
    } as const
}

export const setMaxValue = (digit: number)=> {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            digit
        }
    } as const
}

export const setCurrentValue = (digit: number)=> {
    return {
        type: 'SET-CURRENT-VALUE',
        payload: {
            digit
        }
    } as const
}