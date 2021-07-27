import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

/**
* @author
* @function Charts
**/

const Charts = (props) => {
    const isDemo=useSelector(state=>state.auth.isDemo)
    const isAuth=useSelector(state => state.auth.authenticated)
    useEffect(()=>{
        if(!isAuth){
            props.history.push('/')   
        }
    })
    return (
        <div>Coming Soon !</div>
    )

}

export default withRouter(Charts)