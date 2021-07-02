import React from 'react'
import { Input, InputsContainer, Label } from '../../Designs/InputsLabels'

/**
* @author
* @function LabelInput
**/

const LabelInput = (props) => {
    return (
        <InputsContainer half={props.half}>
            <Label big={props.big}> {props.label}</Label>
            <Input 
            big={props.big} 
            type={props.type} 
            value={props.value} 
            disabled={props.disabled} 
            onChange={(event)=>props.onChange(event)}
            placeholder={props.placeholder}
            />
        </InputsContainer>
    )

}

export default LabelInput