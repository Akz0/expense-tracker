import React, { useEffect } from 'react'
import { Input, InputsContainer, Label, Option, Select, TextArea } from '../../Designs/InputsLabels'

/**
* @author
* @function LabelInput
**/

const LabelInput = (props) => {    
    return (
        <InputsContainer row={props.row} half={props.half}>
            <Label big={props.big}> {props.label}</Label>
            {props.type === 'select' ?
                <Select big={props.big}
                    type={props.type}
                    value={props.value}
                    disabled={props.disabled}
                    onChange={(event) => props.onChange(event)}
                    placeholder={props.placeholder}>{props.options.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)}</Select>
                : props.type === 'textarea' ?
                    <TextArea 
                        big={props.big}
                        type={props.type}
                        value={props.value}
                        disabled={props.disabled}
                        onChange={(event) => props.onChange(event)}
                        placeholder={props.placeholder} />
                    : <Input
                        big={props.big}
                        type={props.type}
                        value={props.value}
                        disabled={props.disabled}
                        onChange={(event) => props.onChange(event)}
                        placeholder={props.placeholder}
                    />}
        </InputsContainer>
    )

}

export default React.memo(LabelInput)