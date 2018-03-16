//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';

type TypeDeals = {
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void
};

const Deals = ({deal, setDealName, setDealAmount, setDealStage}: TypeDeals) => (
    <Split
        fixed={false}
    >
        <ActionButtons/>
        <DealsForm
            deal={deal}
            setDealName={setDealName}
            setDealAmount={setDealAmount}
            setDealStage={setDealStage}
        />
    </Split>
);

export default Deals;