import React,{ useEffect, useState }  from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';

import cogIcon from '@iconify/icons-mdi-light/cog';
import chartPie from '@iconify/icons-mdi-light/chart-pie';
import pencilIcon from '@iconify/icons-mdi-light/pencil';
import bankIcon from '@iconify/icons-mdi-light/bank';
import scriptIcon from '@iconify/icons-mdi-light/script';

import { MainNavContainer, NavItem, NavItemContainer, NavItemsWrapper, NavItemTitle } from '../../Designs/Navigation';
import { BasicReducerConstants } from '../../store/actions/constants';
/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
    
    const [reRender,setRender]= useState(false)
    const open = useSelector((state) => state.basic.showSideBar)
    const dispatch=useDispatch()
    const closeSideBar=()=>{
        dispatch({type:BasicReducerConstants.CLOSE_SIDEBAR})
        setRender(true)
    }
    useEffect(()=>{
        console.log('rerender of Navigation Menu Occurred')
    },[reRender])

    return (
        <MainNavContainer open={open}>
            <NavItemsWrapper>

                <NavItemContainer>
                    <NavItem to="/home" exact onClick={closeSideBar}>
                        <Icon icon={bankIcon} width={'30px'} />
                        <NavItemTitle>Home</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/create"  onClick={closeSideBar}>
                        <Icon icon={pencilIcon} width={'30px'} />
                        <NavItemTitle>Add Expense</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/expenses" onClick={closeSideBar}>
                        <Icon icon={scriptIcon} width={'30px'} />
                        <NavItemTitle>Expenses</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/charts" onClick={closeSideBar}>
                        <Icon icon={chartPie} width={'30px'} />
                        <NavItemTitle>Charts</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/settings" onClick={closeSideBar}>
                        <Icon icon={cogIcon} width={'30px'} />
                        <NavItemTitle>Settings</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

            </NavItemsWrapper>
        </MainNavContainer>

    )

}

export default React.memo(Navigation)