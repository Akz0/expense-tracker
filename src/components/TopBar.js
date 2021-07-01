import React, { useEffect } from 'react'
import { LogOutContainer, MenuButton, TopBarContainer, TopTitle, TopTitleWrapper } from '../Designs/TopBar'
import { Icon } from '@iconify/react';
import seekPrevious from '@iconify/icons-mdi-light/seek-previous';
import menuIcon from '@iconify/icons-mdi-light/menu';

/**
* @author
* @function TopBar
**/

const TopBar = (props) => {
    useEffect(()=>{},[])
    return (
        <TopBarContainer>
            <TopTitleWrapper>
                <MenuButton onClick={props.onClickMenu}><Icon icon={menuIcon} style={{color: '#fff'}} /></MenuButton>
                <TopTitle to="/home">Expenses Tracker</TopTitle>

            </TopTitleWrapper>
            <LogOutContainer onClick={props.logout}>
                <Icon icon={seekPrevious} width={'20px'} />Log Out</LogOutContainer>
        </TopBarContainer>
    )

}

export default TopBar