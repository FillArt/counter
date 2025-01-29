import React, {useCallback, useReducer, useState} from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";
import {
    counterReducer,
    incrementCurrentValue,
    resetState,
    setCurrentValue,
    setErrorMessage,
    setMaxValue,
    setStartValue
} from "../store/reducers/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {CounterItem} from "../types/Counter";

export const Counter = () => {

    const [errorStart, setErrorStart] = useState(false)
    const [errorMax, setErrorMax] = useState(false)

    const state = useSelector<RootState, CounterItem>(state => state.counter)
    const dispatch = useDispatch();

    // const initState = (): CounterItem => {
    //     const localState = localStorage.getItem('local-state');
    //     return localState ? JSON.parse(localState) : {
    //         startValue: 0,
    //         maxValue: 0,
    //         currentValue: 0,
    //         error: ''
    //     };
    // };

    // useEffect(() => {
    //     localStorage.setItem('local-state', JSON.stringify(state));
    //     console.log(state);
    // }, [state]);

    const setStart = useCallback((value: number) => {
        setErrorMax(false)
        setErrorStart(false)
        dispatch(setStartValue(value))
        dispatch(setErrorMessage(''))
    }, [dispatch]);

    const setMax = useCallback((value: number) => {
        setErrorMax(false)
        setErrorStart(false)
        dispatch(setMaxValue(value))
        dispatch(setErrorMessage(''))
    }, [dispatch]);

    const setValue = useCallback(() => {
        if(!(state.startValue >= 0 && state.maxValue >= 0)) {
            setErrorMax(true)
            setErrorStart(true)
            dispatch(setErrorMessage('Values less than 0'))
            return;
        }
        if(state.maxValue <= state.startValue) {
            setErrorMax(true)
            dispatch(setErrorMessage('The maximum value is less than or equal to the starting value.'))
            return;
        }

        dispatch(setCurrentValue())
    }, [state, dispatch]);

    const incrementValue = useCallback(() => {
        console.log(state)
        if(state.maxValue > state.currentValue) {
            dispatch(incrementCurrentValue())
        } else {
            setErrorMax(true)
            dispatch(setErrorMessage('You have reached the maximum value'))
        }
    },[state, dispatch]);

    const resetAll = useCallback(() => {
        dispatch(resetState())
        setErrorMax(false)
        setErrorStart(false)
    }, [state, dispatch]);

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
                <Button label={'Set value'} disabled={(errorStart || errorMax)} onClick={() => setValue()} />
            </div>

            <div
                style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px', textAlign: "center", maxWidth: '200px'}}>
                {state.error ?
                    <p style={{margin: '0px', color: 'red'}}>{state.error}</p> :
                    <h1 style={{margin: '0px'}}>{state.currentValue}</h1>
                }

                <div style={{display: 'flex', gap: '10px', maxWidth: '200px'}}>
                    <Button label={'Inc'} disabled={(errorStart || errorMax)} onClick={incrementValue} />
                    <Button label={'Reset'} onClick={resetAll} />
                </div>
            </div>
        </div>
    );
};