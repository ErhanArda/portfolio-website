import React, { useState } from 'react';

import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';
import Body from './Body'
import MenuItems from './MenuItems';



const { Header, Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <MenuItems />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Body />
            </Layout>
        </>
    )
}

export default Sidebar
