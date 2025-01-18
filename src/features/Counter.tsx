import React, {useReducer} from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";
import {counterReducer} from "../reducers/counterReducer";

export const Counter = () => {

    const [state, dispatchState] = useReducer(counterReducer,
        {
            startValue: 0,
            maxValue: 0,
            currentValue: 0,
            error: ''
        }
    );

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
                <Input placeholder={'Set start value'} value={state.startValue} />
                <Input placeholder={'Set max value'} value={state.maxValue} />
                <Button label={'Set value'} onClick={() => alert('Set start value')} />
            </div>

            <div
                style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign: "center", maxWidth: '200px'}}>
                <h1 style={{margin: '0px'}}>0</h1>

                <div style={{display: 'flex', gap: '10px', maxWidth: '200px'}}>
                    <Button label={'Inc'} onClick={() => alert('Inc')} />
                    <Button label={'Reset'} onClick={() => alert('Reset')} />
                </div>
            </div>
        </div>
    );
};