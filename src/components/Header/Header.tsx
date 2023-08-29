import React, { FC } from "react";
import { Layout } from "antd";
import { Button } from "antd";

const { Header } = Layout;

type HeaderProps = {
    children: React.ReactNode;
}

const headerStyles: React.CSSProperties = {
    color: '#fff',
    height: 64,
    paddingInline: 50
}

const HeaderCustom: FC<HeaderProps> = ({ children }) => {
    return (
        <Header style={headerStyles}>
            <Button type='link'>
                {children}
            </Button>
        </Header>
    );
};

export default HeaderCustom;