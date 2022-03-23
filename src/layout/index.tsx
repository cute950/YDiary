import React from 'react';
import Sprite from '@scripts/Sprite';

export type LayoutProps = {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            {/* <Header /> */}
            {props.children}
            {/* <Footer /> */}
            <Sprite/>
        </>
    );
}

export default Layout;
