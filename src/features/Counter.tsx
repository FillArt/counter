import React from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";

export const Counter = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px' }}>
                <Input placeholder={'Set start value'} />
                <Input placeholder={'Set max value'} />
                <Button label={'Set value'} onClick={() => alert('Set values')}/>
            </div>

        </div>
    );
};