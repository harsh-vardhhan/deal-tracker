//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import ActionButtons from './actionButton';
import Form from './form';

const Deals = () => (
    <Split
        fixed={false}
    >
        <ActionButtons/>
        <Form/>
    </Split>
);

export default Deals;