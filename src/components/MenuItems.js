import React from 'react'
import { Menu, Avatar } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { ProfilePicture } from './MenuItemsStyles'
import { Typography } from 'antd';

const { Title } = Typography;

const MenuItems = () => {
    return (
        <ProfilePicture>
            <div style={{ display: "flex",flexDirection:"column", alignSelf: "center",justifyContent:"center", margin: "5rem 0 0 0" }}>
                <Avatar src="../index.png" style={{ height: "5vh", width: "3vw"}} />
            </div>

            <div style={{ display: "flex",flexDirection:"column", alignSelf: "center",justifyContent:"center", margin: "2rem 0 6rem 0" }}>
            <Title level={4} style={{color:"white"}}> Erhan Arda</Title>
                

            </div>



            <div className="menu-items" style={{ display: "flex", flexDirection: "column" }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        ABOUT
            </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        TIMELINE
            </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        CONTACT
            </Menu.Item>
                </Menu>
            </div>


            <div className="menu-items"
                style={{ margin: "28rem 0 0 0"}}>
                <p style={{display:"flex",justifyContent:"center",color:"white"}}>Copyright @ 2020</p>
            </div>

        </ProfilePicture>
    )
}

export default MenuItems
