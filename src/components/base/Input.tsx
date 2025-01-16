import React, {ChangeEvent} from 'react';

type InputProps = {
    value: number
    callback: (value: number) => void
    placeholder: string;
}

export const Input = (props: InputProps) => {
    const { placeholder, callback, value } = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => callback(Number(e.target.value));

    return <input type="number" value={value} placeholder={placeholder} onChange={onChangeHandler} />;
};