//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';
import Dashboard from './dashboard';
import DealTable from './dealTable';
import type {Deals as DealsType} from './../../types/Deals';

type Props = {
    dealRow: number,
    dealSearch: string,
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    deals: DealsType,
    reverseDealsAction: () => void,
    addDealAction : () => void,
    deleteDealAction: () => void,
    editDealAction: () => void,
    selectDeal: (number) => void,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void,
    setDealSearch: (string) => void
};

type event = {
    target: {
        value: string
    }
}

const DealTableRoute = ({
    addDealAction,
    reverseDealsAction,
    deleteDealAction,
    editDealAction,
    deals,
    dealRow,
    dealSearch,
    selectDeal,
    deal,
    setDealName,
    setDealAmount,
    setDealStage,
    setDealSearch}: Props) => {
    return (
        <div>
            <Dashboard deals={deals}/>
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
                        reverseDealsAction={reverseDealsAction}
                    />
                </Box>
                <Box
                    justify='center'
                    align='center'
                    pad='medium'
                >
                    <Search
                        placeHolder='Search Deals'
                        inline={true}
                        value={dealSearch}
                        onDOMChange={(e: event) => setDealSearch(e.target.value)}
                    />
                    <DealsForm
                        deal={deal}
                        setDealName={setDealName}
                        setDealAmount={setDealAmount}
                        setDealStage={setDealStage}
                    />
                </Box>
            </Split>
        </div>
    );
};

export default DealTableRoute;