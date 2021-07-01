import styled from "styled-components";
import { Colors, Fonts } from "./DesignVariables";
import {Link} from 'react-router-dom'
export const TopBarContainer=styled.div`
    width: 100%;
    height: 55px;
    background-color: ${Colors.red};
    border: none;
    box-shadow: 0 10px 10px -5px rgba(0,0,0,0.55);
    padding:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:5; 
    @media screen and (min-width: 700px) {
        padding:40px;
        height: 75px;
    }
`
export const TopTitleWrapper=styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TopTitle=styled(Link)`
    color: ${Colors.white};
    font-family: ${Fonts.robotoSlab};
    font-weight: bold;
    font-size: 20px;
    padding: 0 10px;
    text-decoration: none;
    @media screen and (min-width: 700px) {
        font-size: 24px;
        padding: 0 20px;
    }
`
export const LogOutContainer=styled.div`
    opacity: 0.8;
    font-family: ${Fonts.robotoSlab};
    font-size: 14px;
    color:${Colors.grey};

    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        color:${Colors.white};
        cursor: pointer;
        opacity: 1;
    }
    @media screen and (min-width:700px){
        font-size: 18px;
    }
`
export const MenuButton=styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 24px;
   @media screen and (min-width: 700px) {
    display: none;
    }

`