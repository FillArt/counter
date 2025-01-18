import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const { label, onClick, disabled = false } = props;
    const onClickHandler = () => onClick()

    return <button disabled={disabled} onClick={onClickHandler}>{label}</button>;
};