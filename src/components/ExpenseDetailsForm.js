import React from 'react'
import { Button } from '../Designs/Buttons'
import { Texts } from '../Designs/InputsLabels'
import { FormWrapper, Row, Title, Wrapper } from '../Designs/UIContainer'
import LabelInput from './UI/LabelInput'

/**
* @author
* @function ExpenseDetails
**/

const ExpenseDetails = (props) => {

    const handleAuthSubmit=(event)=>{
        event.preventDefault()
    }
    const returnSaveButton=()=>{

    }
    return (
        <Wrapper>
            <FormWrapper onSubmit={(event) => handleAuthSubmit(event)}>
                <Title>{props.formTitle}</Title>

                <Row>
                    <LabelInput disabled={props.disabled} value={props.title} label='Title' type='text' placeholder='' onChange={props.handleTitle} />
                </Row>
                <Row>
                    <LabelInput  disabled={props.disabled} value={props.description} label='Description' type='textarea' placeholder='' onChange={props.handleDescription} />
                </Row>
                <Row half input>
                    <LabelInput  disabled={props.disabled} value={props.amount} label='Amount' type='number' placeholder='' onChange={props.handleAmount} />
                    <LabelInput disabled={props.disabled}  value={props.date} label='Date' type='date' placeholder='' onChange={props.handleDate} />
                </Row>
                <Row half input>
                    <LabelInput disabled={props.disabled}  value={props.category} options={props.categories} label='Category' type='select' placeholder='' onChange={props.handleCategory} />
                    <LabelInput disabled={props.disabled}  value={props.type} options={props.expenseTypes} label='Type' type='select' placeholder='' onChange={props.handleType} />
                </Row>
                <Texts error>{props.errorStatus ? props.error ? props.error : props.errorStatus : props.error}</Texts>
                <Row>
                    <Button type="button"  disabled={props.disabled} onClick={props.buttonAction}>{props.buttonName}</Button>
                    
                </Row>
            </FormWrapper>
        </Wrapper>
    )

}

export default ExpenseDetails