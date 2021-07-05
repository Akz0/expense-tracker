import styled from "styled-components";
import { Colors, Fonts, mobileSize } from "./DesignVariables";

export const Button = styled.button`
    border: none;
    color:${Colors.grey};
    background-color: ${Colors.red};
    opacity: ${props => props.opacity ? props.opacity : 1};
    padding: 10px 20px;
    font-family: ${Fonts.robotoSlab};
    width: ${props=>props.long?'100%':'auto'};
    font-size: ${props=>props.big?'16px':'12px'};
    margin:5px 0 5px 0;

    :hover{
        color:${Colors.white};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        cursor: pointer;
        opacity: 1;
    }

    @media screen and (min-width:${mobileSize}){
        width: ${props=>props.long?'100%':'auto'};
        font-size: ${props=>props.big?'20px':'16px'};
        padding: 10px 30px;
        margin:10px 0 10px 0;
    }
`
export const Button2= styled.button`

    border: 1px solid ${props=>props.danger?Colors.red:props.safe?Colors.green:Colors.grey};
    color:${props=>props.danger?Colors.red:props.safe?Colors.green:Colors.grey}; 

    background-color: transparent;
    opacity: ${props => props.opacity ? props.opacity : 1};
    padding: 10px 20px;
    font-family: ${Fonts.roboto};
    border-radius: 2px;
    font-size: ${props=>props.big?'16px':'12px'};
    width: ${props=>props.long?'200px':'auto'};
    margin:5px 0 5px 0;

    :hover{
        color:${props=>props.danger?Colors.red:props.safe?Colors.white:Colors.yellow};
        border: 1px solid ${props=>props.danger?Colors.red:props.safe?Colors.green:Colors.yellow}; 
        background-color: ${props=>props.safe?Colors.green:'transparent'};
        opacity: 1;
        cursor: pointer;
    }

    @media screen and (min-width:${mobileSize}){
        font-size: ${props=>props.big?'20px':'16px'};
        width: ${props=>props.long?'200px':'auto'};
        padding: 10px 30px;
        margin:10px 0 10px 0;
    }
`