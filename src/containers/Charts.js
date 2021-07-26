import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function Charts
**/

const Charts = (props) => {
    const isDemo=useSelector(state=>state.auth.isDemo)
    return (
        <div>Coming Soon !</div>
    )

}

export default Charts