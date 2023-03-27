import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;
font-weight: 700;
font-size: 25px;

&.active{
    color: red;
}`