import styled from "styled-components"

import { NavLink,Nav } from 'reactstrap'


export const ProfilePicture = styled.div`
display: flex;
flex-direction: column; 
align-self: "space-around";
justify-content:"center";

`
export const Tabs = styled(Nav)`
/* display: flex;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none; */
display:flex;
justify-content:center;
`


export const WhiteLink = styled(NavLink)`
color:aliceblue
`