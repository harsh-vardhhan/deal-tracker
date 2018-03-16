//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';

type TypeDeals = {
    stage: number
};

const Deals = ({stage}: TypeDeals) => (
    <Split
        fixed={false}
    >
        <ActionButtons/>
        <DealsForm stage={stage}/>
    </Split>
);

export default Deals;