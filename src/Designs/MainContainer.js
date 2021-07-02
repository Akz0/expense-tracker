import styled from "styled-components";
import { Colors, Fonts, mobileSize } from "./DesignVariables";

export const MainContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.darkBlue};
    font-family: ${Fonts.roboto};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    @media screen and (min-width: ${mobileSize}) {
        width:1280px;
        height: 720px;
    }
`
export const ContentWrapper=styled.div`
    width: 100%;
    height: calc(100vh-55px);
    background-color: ${Colors.darkBlue};
    font-family: ${Fonts.roboto};
    display: flex;
    flex-direction: row;
    @media screen and (min-width: ${mobileSize}) {
        width:1280px;
        height: 640px;
    }
`