import React, {ReactNode} from 'react';

type HomeProps = {
    children: ReactNode;
}

export const Home = (props: HomeProps) => {

    const {children} = props;

    return (
        <div>
            {children}
        </div>
    );
};
