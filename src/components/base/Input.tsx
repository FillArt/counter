import React, {ChangeEvent} from 'react';

export const Input = () => {

    const [value, setValue] = React.useState('111');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <input type="text" value={value} onChange={onChangeHandler} />;
};