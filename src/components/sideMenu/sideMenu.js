//@flow
import React from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import DealsLink from './dealsLink';
import CustomersLink from './customersLink';
import SideBarHeader from './sideBarHeader';

type Props = {
    toggleLogin: () => void
}

const SideMenu = ({toggleLogin}: Props) => (
    <Sidebar
        size='small'
        colorIndex='neutral-1'
    >
        <SideBarHeader/>
        <Box
            flex='grow'
            justify='start'
        >
            <Menu primary={true}>
                <DealsLink/>
                <CustomersLink/>
                <br/>
                <a onClick={toggleLogin}>{'Logout'}</a>
            </Menu>
        </Box>
    </Sidebar>
);

export default SideMenu;