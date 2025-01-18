import {setMaxValue, setStartValue, setCurrentValue} from "../reducers/counterReducer";

export type CounterItem = {
    startValue: number,
    maxValue: number,
    currentValue: number,
    error: string
}

type MaxValue = ReturnType<typeof setMaxValue>
type StartValue = ReturnType<typeof setStartValue>
type CurrentValue = ReturnType<typeof setCurrentValue>

export type TsarType = MaxValue | StartValue | CurrentValue;
