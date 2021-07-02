import styled from "styled-components";
import { Colors, mobileSize } from "./DesignVariables";

export const Input = styled.input`
    width:100%;
    padding:10px 10px;
    border:1px solid ${Colors.grey};
    color:${Colors.white};
    background: transparent;
    font-size: ${props=>props.big?'20px':'16px'};

    :focus{
        outline: none;
        border:1px solid ${Colors.red};
    }

    @media screen and (min-width:${mobileSize}){
        padding:10px 10px;
    }
`
export const Label = styled.p`
    padding-left:5px;
    padding-bottom:10px;
    font-size: ${props=>props.big?'20px':'16px'};
    color:${Colors.white};
    
    @media screen and (min-width:${mobileSize}){
        
    }
`
export const Texts = styled.p`
    text-align: center;
    font-size: ${props=>props.big?'20px':'16px'};
    text-decoration: ${props=>props.link?'underline':'none'};
    cursor: ${props=>props.link?'pointer':''};
    color:${props=>props.error?Colors.yellow:props.link?Colors.red:Colors.white};
    padding:10px 0 15px 0;
    @media screen and (min-width:${mobileSize}){
        
    }
`
export const InputsContainer=styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width:100%;
    padding:5px 5px;

    @media screen and (min-width:${mobileSize}){
        padding:0 10px;
        width:${props=>props.half?'50%':'100%'};
    }
`;