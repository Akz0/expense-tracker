import styled from "styled-components"
import { Colors, mobileSize } from "./DesignVariables"

export const ExpensesFormContainer = styled.div`
    min-height:50vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width:${mobileSize}) {
        width:65%;
    }
`
export const ExpensesListContainer = styled.div`
    display: flex;
    align-items: center;
    margin:0vh 0;
    padding: 10px 5px;
    width:100%;

    
    flex-direction:row; 
    justify-content: space-between; 
    max-height: 10vh; 
    overflow-x: auto;
    overflow-y: none;
    

    border: 1px solid ${Colors.blue2};
    /* width */
    &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.1);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        width: 20px;
        background: ${Colors.red};
    }

    @media screen and (min-width:${mobileSize}) {
        width:45%;
        min-width: auto;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        height: 530px;
        max-height: 530px;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: none;
        
    }
`
export const ExpensesConatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding:0;

    @media screen and (min-width:${mobileSize}) {
        padding-top: 30px;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
        align-items: flex-start;
    }
`

export const ExpensesItem=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${Colors.grey};
    padding:5px 10px;
    margin:5px 3px;
    min-width:300px;
    max-width: 300px;
    font-size: 12px;
    :hover{
        cursor: pointer;
        border:1px solid ${Colors.red}
    }
    @media screen and (min-width:${mobileSize}){
        padding:5px 5px;
        margin:5px 0px;
        width:100%;
        min-width:100%;
        font-size: medium;
    }
    
`
export const ExpenseItemTitle=styled.span`
    padding:0 5px;
    color:${Colors.white};
`
export const ExpenseItemDate=styled.span`
    font-size: 10px;
    padding:0 5px;
    color:${Colors.white};
`
export const ExpenseItemPrice=styled.span`
    color:${props=>props.expense?Colors.red:Colors.green}
`