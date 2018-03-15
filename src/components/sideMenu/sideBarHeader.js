//@flow
import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

const SideBarHeader = () => (
    <Header
        pad='medium'
        justify='between'
    >
        <Title>{'Menu'}</Title>
    </Header>
);

export default SideBarHeader;
