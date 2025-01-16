import React, {useState} from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";

export const Counter = () => {

    const [value, setValue] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const setValueHandler = () => setValue(startValue)
    const incrementHandler = () => {
        setValue(value + 1)
    }
    const resetHandler = () => {
        setStartValue(0)
        setMaxValue(0)
        setValue(0)
    }

    return (
        <div style={{display: "flex", justifyContent: "space-around", margin: "0 auto", alignItems: "center", height: "100vh", maxWidth: '400px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px'}}>
                <Input placeholder={'Set start value'} value={startValue} callback={setStartValue}/>
                <Input placeholder={'Set max value'} value={maxValue} callback={setMaxValue}/>
                <Button label={'Set value'} onClick={setValueHandler}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign: "center", maxWidth: '200px'}}>
                <h1 style={{margin: '0px'}}>{value}</h1>

                <div style={{display: 'flex', gap: '10px', maxWidth: '200px'}}>
                    <Button label={'Inc'} onClick={incrementHandler}/>
                    <Button label={'Reset'} onClick={resetHandler}/>
                </div>
            </div>
        </div>
    );
};