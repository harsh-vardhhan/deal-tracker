import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

const AppHeader = () => (
    <Header
        size='small'
        colorIndex='neutral-1-t'
        pad='medium'
    >
        <Title>{'Deal Tracker'}</Title>
    </Header>
);

export default AppHeader;