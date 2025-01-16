import React from 'react';
import {Input} from "../components/base/Input";

export const Counter = () => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Input placeholder={'Set min value'} />
            </div>

        </div>
    );
};