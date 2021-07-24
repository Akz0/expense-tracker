import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';


import { LogOutContainer, MenuButton, TopBarContainer, TopTitle, TopTitleWrapper } from '../Designs/TopBar'
import seekPrevious from '@iconify/icons-mdi-light/seek-previous';
import menuIcon from '@iconify/icons-mdi-light/menu';
import { BasicReducerConstants } from '../store/actions/constants';
import { Logout } from '../store/actions';

/**
* @author
* @function TopBar
**/

const TopBar = (props) => {
    
    const open = useSelector((state) => state.basic.showSideBar)
    const dispatch=useDispatch()
    const handleSideBar=()=>{
        if(open){
            dispatch({type:BasicReducerConstants.CLOSE_SIDEBAR})
            
        }else{
            dispatch({type:BasicReducerConstants.OPEN_SIDEBAR})
            
        }
    }

    useEffect(()=>{
        
    },[])

    return (
        <TopBarContainer>
            <TopTitleWrapper>
                <MenuButton onClick={handleSideBar}><Icon icon={menuIcon} style={{color: '#fff'}} /></MenuButton>
                <TopTitle to="/home">Expenses Tracker</TopTitle>

            </TopTitleWrapper>
            <LogOutContainer onClick={()=>dispatch(Logout())}>
                <Icon icon={seekPrevious} width={'20px'} />Log Out</LogOutContainer>
        </TopBarContainer>
    )

}

export default TopBar