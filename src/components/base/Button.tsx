import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
}

export const Button = (props: ButtonProps) => {
    const { label, onClick } = props;
    const onClickHandler = () => onClick()

    return <button onClick={onClickHandler}>{label}</button>;
};