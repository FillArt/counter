import {
    setMaxValue,
    setStartValue,
    setCurrentValue,
    incrementCurrentValue,
    setErrorMessage, resetState
} from "../reducers/counterReducer";

export type CounterItem = {
    startValue: number,
    maxValue: number,
    currentValue: number,
    error: string
}

type MaxValue = ReturnType<typeof setMaxValue>
type StartValue = ReturnType<typeof setStartValue>
type CurrentValue = ReturnType<typeof setCurrentValue>
type IncrementValue = ReturnType<typeof incrementCurrentValue>
type errorMessage = ReturnType<typeof setErrorMessage>
type reset = ReturnType<typeof resetState>

export type TsarType = MaxValue | StartValue | CurrentValue | IncrementValue | errorMessage | reset;
