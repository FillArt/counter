import React, {ChangeEvent} from 'react';
import {setStartValue} from "../../reducers/counterReducer";

type InputProps = {
    placeholder: string,
    value: number,
    callback?: (value: number) => void
}

export const Input = (props: InputProps) => {
    const {placeholder, value, callback} = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback?.(Number(e.currentTarget.value));
    }

    return <input type="number" value={value} placeholder={placeholder} onChange={(e) => onChangeHandler(e)}/>;
};