import styled from "styled-components";
import { Colors, mobileSize } from "./DesignVariables";

export const Input = styled.input`
    width:100%;
    padding:5px 5px;
    border:1px solid ${props=>props.dark?Colors.blue1:Colors.grey};
    color:${Colors.white};
    background: ${props=>props.dark?Colors.blue3:'transparent'};
    font-size: ${props=>props.big?'26px':'12px'};
    border-radius: ${props=>props.round?'5px':'0px'};
    ::-webkit-calendar-picker-indicator { color: white; }
    :focus{
        outline: none;
        border:1px solid ${Colors.red};
    }
    :disabled{
        opacity: 0.5;
    }
    @media screen and (min-width:${mobileSize}){
        padding:10px 10px;
        font-size: ${props=>props.big?'20px':'16px'};
    }
`

export const Select = styled.select`
    width:100%;
    padding:5px 5px;
    border:1px solid ${props=>props.dark?Colors.blue1:Colors.grey};
    color:${Colors.white};
    background: ${props=>props.dark?Colors.blue3:'transparent'};
    font-size: ${props=>props.big?'16px':'12px'};
    border-radius: ${props=>props.round?'5px':'0px'};
    :focus{
        outline: none;
        border:1px solid ${Colors.red};
    }
    :disabled{
        opacity: 0.5;
    }
    @media screen and (min-width:${mobileSize}){
        padding:10px 10px;
        font-size: ${props=>props.big?'20px':'16px'};
    }
`
export const Option=styled.option`
color:black;
    background-color: 'transparent';
`

export const TextArea = styled.textarea`
    width:100%;
    resize:none;
    height: fit-content;
    padding:5px 5px;
    border:1px solid ${props=>props.dark?Colors.blue1:Colors.grey};
    color:${Colors.white};
    background: ${props=>props.dark?Colors.blue3:'transparent'};
    font-size: ${props=>props.big?'16px':'12px'};
    border-radius: ${props=>props.round?'5px':'0px'};
    :focus{
        outline: none;
        border:1px solid ${Colors.red};
    }
    :disabled{
        opacity: 0.5;
    }
    @media screen and (min-width:${mobileSize}){
        padding:10px 10px;
        font-size: ${props=>props.big?'20px':'16px'};
    }
`
export const Label = styled.p`
    padding-left:5px;
    padding-bottom:5px;
    font-size: ${props=>props.big?'16px':'12px'};
    color:${Colors.white};
    
    @media screen and (min-width:${mobileSize}){
        font-size: ${props=>props.big?'20px':'16px'};
        padding-left:5px;
        padding-bottom:10px;
    }
`
export const Texts = styled.p`
    text-align: center;
    font-size: ${props=>props.big?'20px':'16px'};
    text-decoration: ${props=>props.link?'underline':'none'};
    cursor: ${props=>props.link?'pointer':''};
    color:${props=>props.error?Colors.yellow:props.link?Colors.red:props.safe?Colors.green:Colors.white};
    padding:10px 0 15px 0;
    @media screen and (min-width:${mobileSize}){
        
    }
`
export const InputsContainer=styled.div`
    
    display: flex;
    flex-direction: ${props=>props.row?'row':'column'};
    justify-content: ${props=>props.row?'space-between':'center'};
    align-items: ${props=>props.row?'center':'flex-start'};
    width:100%;
    padding:5px 5px;
    @media screen and (min-width:${mobileSize}){
        padding:0 10px;
        width:${props=>props.half?'50%':'100%'};
    }
`;