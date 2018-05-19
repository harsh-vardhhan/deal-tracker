//@flow
import React from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import ActionButtons from './actionButton';
import DealsForm from './dealsForm';
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

const Dashboard = ({deals}) => {
    const closed = deals.filter((value) => value.stage === 4).length;
    const open = deals.filter((value) => value.stage !== 4).length;
    const totalAmount = deals.reduce((a, b) => +a + +b.amount, 0);
    return (
        <Box
            pad='medium'
            direction='row'
        >
            <Meter
                type='circle'
                size='small'
                max={deals.length}
                label={
                    <Value
                        value={open}
                        units='open'
                        size='small'
                    />}
                value={open}
            />
            <Box
                justify='center'
                align='center'
                pad='medium'
            />
            <Meter
                type='circle'
                size='small'
                max={deals.length}
                label={
                    <Value
                        value={closed}
                        units='closed'
                        size='small'
                    />}
                value={closed}
            />
            <Box
                justify='center'
                align='center'
                pad='medium'
            />
            <Meter
                type='circle'
                size='small'
                max={totalAmount}
                label={
                    <Value
                        value={totalAmount}
                        units='Worth'
                        size='small'
                    />}
                value={totalAmount}
            />
        </Box>
    );
};

export default DealTableRoute;