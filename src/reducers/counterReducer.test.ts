import {counterReducer, setMaxValue, setStartValue} from "./counterReducer";
import {CounterItem} from "../types/Counter";

export {}

describe('Tests for Counter', () => {
    let state: CounterItem;

    beforeEach(() => {
        state = {
            startValue: 0,
            maxValue: 0,
            currentValue: 0,
            error: ''
        }

    })

    test('Set start value', () => {
        const action = setStartValue(10);
        const newState = counterReducer(state, action);

        expect(newState.startValue).toBe(10);
    })

    test('Set max value', () => {
        const action = setMaxValue(10);
        const newState = counterReducer(state, action);

        expect(newState.maxValue).toBe(10);

    })
})