import React from 'react';
import {Link} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Deals from './deals';
import Customers from './customers';

const SideMenu = () => (
    <Sidebar
        size='small'
        colorIndex='neutral-1'
    >
        <Header
            pad='medium'
            justify='between'
        >
            <Title>{'Menu'}</Title>
        </Header>
        <Box
            flex='grow'
            justify='start'
        >
            <Menu primary={true}>
                <Link
                    to={'/Deals'}
                    component={Deals}
                >
                    <Anchor
                        href='#'
                        className='active'
                    >
                        {'Deals'}
                    </Anchor>
                </Link>
                <Link
                    to={'/Customers'}
                    component={Customers}
                >
                    <Anchor
                        href='#'
                        className='active'
                    >
                        {'Customers'}
                    </Anchor>
                </Link>
            </Menu>
        </Box>
    </Sidebar>
);

export default SideMenu;