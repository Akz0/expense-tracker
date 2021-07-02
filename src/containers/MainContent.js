import React from 'react'
import { Content } from '../Designs/MainContent'

/**
* @author
* @function MainContent
**/

const MainContent = (props) => {
    return (
        <Content>
            {props.children}
        </Content>
    )

}

export default MainContent