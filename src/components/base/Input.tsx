import React, {ChangeEvent} from 'react';

type InputProps = {
    placeholder?: string;
}

export const Input = (props: InputProps) => {
    const { placeholder } = props;
    const [value, setValue] = React.useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <input type="text" value={value} placeholder={placeholder} onChange={onChangeHandler} />;
};