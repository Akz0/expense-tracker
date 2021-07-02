import styled from "styled-components";
import { mobileSize } from "./DesignVariables";

export const Content=styled.div`
    z-index: 4;
    color:white;
    width: 100%;
    height: 90vh;
    padding:20px 10px;
    @media screen and (min-width:${mobileSize}){
        margin-left:285px;
        padding:20px 40px;
        width: 995px;
        height:640px;
    }
`