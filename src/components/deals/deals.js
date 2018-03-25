//@flow
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import type {Deals as DealsType} from './../../types/Deals';
import DealTableRoute from './dealTableRoute';
import ViewModeButton from './viewModeButton';

type TypeDeals = {
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

const Deals = ({
    deal,
    deals,
    dealRow,
    addDealAction,
    deleteDealAction,
    editDealAction,
    selectDeal,
    setDealName,
    setDealAmount,
    setDealStage}: TypeDeals) => {
    return (
        <div>
            <ViewModeButton/>
            <Switch>
                <Route
                    path='/Deals/DealTableRoute'
                    component={() => (
                        <DealTableRoute
                            deal={deal}
                            deals={deals}
                            dealRow={dealRow}
                            addDealAction={addDealAction}
                            deleteDealAction={deleteDealAction}
                            editDealAction={editDealAction}
                            selectDeal={selectDeal}
                            setDealName={setDealName}
                            setDealAmount={setDealAmount}
                            setDealStage={setDealStage}
                        />
                    )}
                />
                <Route
                    path='/Deals/DealBoardRoute'
                    component={() => (
                        <DealBoard/>
                    )}
                />
            </Switch>
        </div>
    );
};

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

const DealBoard = () => {
    return (
        <Box
            direction='Column'
            style={{width: '1000px'}}
        >
            {Stages.map((value, i) => {
                return (
                    <Box
                        key={i}
                        direction='row'
                        justify='start'
                        align='center'
                        pad='small'
                        margin='small'
                        size='medium'
                        colorIndex='neutral-1'
                    >
                        <Value
                            value={value.label}
                            size='xsmall'
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default Deals;