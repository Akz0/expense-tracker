import styled from "styled-components";
import { keyframes } from "styled-components";
import { Colors, mobileSize } from "./DesignVariables";

export const Row = styled.div`
    width:100%;
    padding:10px 0;
    display: flex;
    flex-direction: ${props=>props.half?'row':'column'};
    align-items: center;
    justify-content: space-between;
`
export const UiContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${mobileSize}){
        width: ${props=>props.long?'50%':'30%'};
    }
`

export const FormContainer=styled.form`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
    justify-content: space-between;
    align-items: center;
    z-index:223;
    @media screen and (min-width:700px){
        height: 70vh;
        margin: 10vh 0;
    }
`


export const modalAnimation=keyframes`
    0%{
        transform:scale(0.8);
        opacity:0;
    }
    100%{
        transform:scale(1);
        opacity: 1;
    }
`
export const Modal = styled.div`
    position: absolute;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px 20px;
    background: ${Colors.blue2};
    border: 1px solid ${Colors.blue2};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    animation-name: ${modalAnimation};
    animation-duration: 0.4s;
    animation-direction: forwards;
    
    @media screen and (min-width: ${mobileSize}){
        width: 50%;
    }

`
