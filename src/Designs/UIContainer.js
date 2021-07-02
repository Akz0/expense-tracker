import styled from "styled-components";
import { mobileSize } from "./DesignVariables";

export const Row = styled.div`
    width:100%;
    padding:10px 0;
    display: flex;
    flex-direction: ${props=>props.half?'row':'column'};
    justify-content: space-between;
`
export const UiContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${mobileSize}){
        width: 30%;
    }
`