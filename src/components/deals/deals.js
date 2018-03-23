//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';
import DealTable from './dealTable';
import type {Deals as DealsType} from './../../types/Deals';

type TypeDeals = {
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    deals: DealsType,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void
};

const Deals = ({deal, deals, setDealName, setDealAmount, setDealStage}: TypeDeals) => (
    <Split
        fixed={false}
    >
        <Box
            justify='center'
            align='center'
            pad='medium'
        >
            <ActionButtons/>
            <DealTable deals={deals}/>
        </Box>
        <DealsForm
            deal={deal}
            setDealName={setDealName}
            setDealAmount={setDealAmount}
            setDealStage={setDealStage}
        />
    </Split>
);

export default Deals;