import React, { useState } from 'react'
import { Avatar } from 'antd';
import { Link } from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';
import { Nav, NavItem, Tooltip, Col } from 'reactstrap';
import { ProfilePicture, WhiteLink } from './MenuItemsStyles'
import navigation from '../navigation'
import ContactItems from './ContactItems';



const MenuItems = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <ProfilePicture>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center", margin: "5rem 0 0 0" }}>
                <Avatar size={64} icon={<UserOutlined />} />
            </div>

            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", margin: "2rem 0 6rem 0" }}>
                <p> <span style={{ color: "aliceblue" }} href="#" id="TooltipExample">Erhan Arda</span>.</p>
                <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                    Erhan Arda
                </Tooltip>
            </div>



            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Col>
                    <Nav className="mr-auto">
                        {
                            navigation.map((nav) => {
                                return <NavItem>
                                    <WhiteLink tag={Link} to={nav.to}>{nav.title}</WhiteLink>
                                </NavItem>
                            })
                        }
                    </Nav>
                </Col>
            </div>


            <footer style={{ display: "flex", alignItems: "space-around", justifyContent: "flex-start", marginLeft: "0", background: "transparent", width: "5rem" }}>
                <p>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "0", background: "transparent", width: "25rem" }}>
                        <ContactItems />
                    </div>
                </p>
            </footer>
        </ProfilePicture>
    )
}

export default MenuItems
