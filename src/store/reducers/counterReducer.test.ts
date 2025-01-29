import {
    counterReducer,
    incrementCurrentValue,
    resetState,
    setErrorMessage,
    setMaxValue,
    setStartValue
} from "./counterReducer";
import {CounterItem} from "../../types/Counter";

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

    test('Increment current value', () => {
        const action = incrementCurrentValue();
        const newState = counterReducer(state, action);

        expect(newState.currentValue).toBe(1)
    })

    test('Set error message', () => {
        const action = setErrorMessage('Error');
        const newState = counterReducer(state, action);

        expect(newState.error).toBe('Error');
    })

    test('Reset state', () => {
        const action = resetState();
        const newState = counterReducer(state, action);

        expect(newState.currentValue).toBe(0);
        expect(newState.maxValue).toBe(0);
        expect(newState.startValue).toBe(0);
        expect(newState.error).toBe('');
    })
})