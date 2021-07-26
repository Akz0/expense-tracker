import React from 'react'
import { Key, Value } from '../../Designs/InputsLabels'
import { DataItemContainer } from '../../Designs/UIContainer'

/**
* @author
* @function DataItem
**/

const DataItem = (props) => {
    return (
        <DataItemContainer row style={{margin:'20px 0'}}>
            <Key>{props.label}</Key>
            <Value red={props.red} green={props.green}>{props.value}</Value>
        </DataItemContainer>
    )

}

export default DataItem