import React from 'react'
import { InputsContainer, Key, Value } from '../../Designs/InputsLabels'

/**
* @author
* @function DataItem
**/

const DataItem = (props) => {
    return (
        <InputsContainer row>
            <Key>{props.label}</Key>
            <Value red={props.red} green={props.green}>{props.value}</Value>
        </InputsContainer>
    )

}

export default DataItem