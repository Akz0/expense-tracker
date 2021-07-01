import React from 'react'
import { Icon } from '@iconify/react';

import cogIcon from '@iconify/icons-mdi-light/cog';
import chartPie from '@iconify/icons-mdi-light/chart-pie';
import pencilIcon from '@iconify/icons-mdi-light/pencil';
import bankIcon from '@iconify/icons-mdi-light/bank';
import scriptIcon from '@iconify/icons-mdi-light/script';

import { MainNavContainer, NavItem, NavItemContainer, NavItemsWrapper, NavItemTitle } from '../../Designs/Navigation';
/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
    return (
        <MainNavContainer open={props.open}>
            <NavItemsWrapper>

                <NavItemContainer>
                    <NavItem to="/home" exact>
                        <Icon icon={bankIcon} width={'30px'} />
                        <NavItemTitle>Home</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/create" >
                        <Icon icon={pencilIcon} width={'30px'} />
                        <NavItemTitle>Add Expense</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/expenses">
                        <Icon icon={scriptIcon} width={'30px'} />
                        <NavItemTitle>Expenses</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/charts">
                        <Icon icon={chartPie} width={'30px'} />
                        <NavItemTitle>Charts</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

                <NavItemContainer>
                    <NavItem to="/settings">
                        <Icon icon={cogIcon} width={'30px'} />
                        <NavItemTitle>Settings</NavItemTitle>
                    </NavItem>
                </NavItemContainer>

            </NavItemsWrapper>
        </MainNavContainer>

    )

}

export default React.memo(Navigation)