import React, {ChangeEvent} from 'react';

type InputProps = {
    placeholder: string;
    value: number;
}

export const Input = (props: InputProps) => {
    const { placeholder, value} = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }

    return <input type="number" value={value} placeholder={placeholder} onChange={(e) => onChangeHandler(e)} />;
};