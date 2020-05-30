import React, { useState } from 'react'
import { Avatar } from 'antd';
import { Link } from "react-router-dom"
import {  NavItem, Tooltip, Col } from 'reactstrap';
import { ProfilePicture, WhiteLink,Tabs } from './MenuItemsStyles'
import navigation from '../../navigation'



const MenuItems = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <ProfilePicture>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center", marginTop: "5rem" }}>
                <Avatar size={82} src="data:image/jpeg;base64,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" />
            </div>

            {/* <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", margin: "2rem 0 6rem 0" }}>
                <p> <span style={{ color: "aliceblue" }} href="#" id="TooltipExample">Erhan Arda</span>.</p>
                <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                    Erhan Arda
                </Tooltip>
            </div> */}

            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", margin: "2rem" }}>
                <p>
                    <span style={{ color: "aliceblue" }} href="#" id="TooltipExample">Erhan Arda</span>.
                </p>
                <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                    Erhan Arda
                </Tooltip>
            </div>





            <div style={{ display: "flex",flexWrap:"wrap" ,flexDirection: "column", alignSelf: "center", justifyContent: "center", marginTop: "5rem" }}>
                <Col>
                    <Tabs>
                        {
                            navigation.map((nav) => {
                                return <NavItem>
                                    <WhiteLink tag={Link} to={nav.to}>{nav.title}</WhiteLink>
                                </NavItem>
                            })
                        }
                    </Tabs>
                </Col>
            </div>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            </div> */}

            {/* <footer style={{ display: "flex", justifyContent: "flex-start", marginLeft: "0", background: "transparent", width: "5rem" }}>
                <p>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "0", background: "transparent", width: "25rem" }}>
                        <ContactItems />
                    </div>
                </p>
            </footer> */}
          
        </ProfilePicture>
    )
}

export default MenuItems
