//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';
import DealTable from './dealTable';
import type {Deals as DealsType} from './../../types/Deals';

type DealTableRouteType = {
    dealRow: number,
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    deals: DealsType,
    addDealAction : () => void,
    deleteDealAction: () => void,
    editDealAction: () => void,
    selectDeal: (number) => void,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void
};

const DealTableRoute = ({
    addDealAction,
    deleteDealAction,
    editDealAction,
    deals,
    dealRow,
    selectDeal,
    deal,
    setDealName,
    setDealAmount,
    setDealStage}: DealTableRouteType) => {
    return (
        <Split
            fixed={false}
        >
            <Box
                justify='center'
                align='center'
                pad='medium'
            >
                <ActionButtons
                    addDealAction={addDealAction}
                    deleteDealAction={deleteDealAction}
                    editDealAction={editDealAction}
                />
                <DealTable
                    deals={deals}
                    dealRow={dealRow}
                    selectDeal={selectDeal}
                />
            </Box>
            <DealsForm
                deal={deal}
                setDealName={setDealName}
                setDealAmount={setDealAmount}
                setDealStage={setDealStage}
            />
        </Split>
    );
};

export default DealTableRoute;