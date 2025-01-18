import React, {ChangeEvent} from 'react';

type InputProps = {
    placeholder: string,
    value: number,
    error: boolean,
    callback?: (value: number) => void
}

export const Input = (props: InputProps) => {
    const {placeholder, value, callback} = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback?.(Number(e.currentTarget.value));
    }

    const inputStyle = props.error
        ? { border: '1px solid red', padding: '5px' }
        : { padding: '5px' };

    return <input type="number" style={inputStyle} value={value} placeholder={placeholder} onChange={(e) => onChangeHandler(e)}/>;
};