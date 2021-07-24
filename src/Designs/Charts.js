import styled from "styled-components";
import { mobileSize } from "./DesignVariables";

export const HalfContainer=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: ${props=>props.center?'center':'flex-start'};
    align-items: center;
    border:${props=>props.border?'1px solid white':''};
    margin: 20px 0px 20px 0;
    
    @media screen and (min-width:${mobileSize}){
        width:50%;
        height: 100%;
        margin: 0;
    }
`

export const FullContanier=styled.div`
    width: ${props=>props.sub?'98%':'100%'};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    border:${props=>props.border?'1px solid white':''};    
    @media screen and (min-width:${mobileSize}){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }
 
`