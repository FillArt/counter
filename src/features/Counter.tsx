import React, {useCallback, useReducer, useState} from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";
import {counterReducer, setCurrentValue, setMaxValue, setStartValue} from "../reducers/counterReducer";

export const Counter = () => {

    const [errorStart, setErrorStart] = useState(false)
    const [errorMax, setErrorMax] = useState(false)

    const [state, dispatchState] = useReducer(counterReducer,
        {
            startValue: 0,
            maxValue: 0,
            currentValue: 0,
            error: ''
        }
    );

    const setStart = useCallback((value: number) => {
        setErrorMax(false)
        setErrorStart(false)
        dispatchState(setStartValue(value))
    }, [dispatchState]);
    const setMax = useCallback((value: number) => {
        setErrorMax(false)
        setErrorStart(false)
        dispatchState(setMaxValue(value))
    }, [dispatchState]);
    const setValue = useCallback(() => {
        if(!(state.startValue >= 0 && state.maxValue >= 0)) {
            alert('Error!');
            setErrorMax(true)
            setErrorStart(true)
            return;
        }
        if(state.maxValue <= state.startValue) {
            setErrorMax(true)
            alert('Error!');
            return;
        }

        dispatchState(setCurrentValue())
    }, [state, dispatchState]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0 auto",
            alignItems: "center",
            height: "100vh",
            maxWidth: '400px'
        }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px'}}>
                <Input placeholder={'Set start value'} error={errorStart} callback={(value) => setStart(value)} value={state.startValue} />
                <Input placeholder={'Set max value'} error={errorMax} callback={(value) => setMax(value)} value={state.maxValue} />
                <Button label={'Set value'} onClick={() => setValue()} />
            </div>

            <div
                style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign: "center", maxWidth: '200px'}}>
                <h1 style={{margin: '0px'}}>{state.currentValue}</h1>

                <div style={{display: 'flex', gap: '10px', maxWidth: '200px'}}>
                    <Button label={'Inc'} onClick={() => alert('Inc')} />
                    <Button label={'Reset'} onClick={() => alert('Reset')} />
                </div>
            </div>
        </div>
    );
};