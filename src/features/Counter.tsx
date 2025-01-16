import React from 'react';
import {Input} from "../components/base/Input";
import {Button} from "../components/base/Button";

export const Counter = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-around", margin: "0 auto", alignItems: "center", height: "100vh", maxWidth: '400px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px'}}>
                <Input placeholder={'Set start value'}/>
                <Input placeholder={'Set max value'}/>
                <Button label={'Set value'} onClick={() => alert('Set values')}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign: "center", maxWidth: '200px'}}>
                <h1 style={{margin: '0px'}}>0</h1>

                <div style={{display: 'flex', gap: '10px', maxWidth: '200px'}}>
                    <Button label={'Inc'} onClick={() => alert('Inc++')}/>
                    <Button label={'Reset'} onClick={() => alert('Reset')}/>
                </div>
            </div>
        </div>
    );
};