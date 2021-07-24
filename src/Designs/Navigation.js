import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { Colors, mobileSize } from "./DesignVariables";


export const MainNavContainer = styled.div`
    position :fixed;

    width: 285px;
    height: 100vh;
    z-index: 10;
    background-color: ${Colors.blue2};
    display: flex;
    align-items:stretch;
    justify-content: center;
    transform: translateX(${props => props.open ? '0' : '-100%'});
    transition: 0.5s all ease;
   @media screen and (min-width: ${mobileSize}) {
        transform: translateX(0%);
        height:640px;
    }
`
export const NavItemsWrapper = styled.ul`
    width: 235px;
    height: 360px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0px 0px 0px 30px;
`
export const NavItemContainer = styled.li`
    
`
export const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 0px;
    color:${Colors.grey};
    text-decoration: none;
    opacity:${props => props.opacity ? `${props.opacity}` : 1};

    border: ${props=>props.border?`1px solid ${Colors.red}`:'none'};
    :hover{
        color:${Colors.red};
    }
    &.active {
        color:${Colors.red};
    }
    @media screen and (min-width: ${mobileSize}) {
        font-size: 18px;
    }

`
export const NavItemTitle = styled.div`
    padding: 0 20px;
`