//@flow
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import type {Deals as DealsType} from './../../types/Deals';
import DealTableRoute from './dealTableRoute';
import ViewModeButton from './viewModeButton';
import DealBoard from './dealBoard/dealBoard';
import type {Deal as DealType} from '../../types/Deal';

type TypeDeals = {
    dealRow: number,
    dealSearch: string,
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
    setDealStage: (number) => void,
    setDealState: (DealType) => void,
    setDealSearch: (string) => Promise<any>
};

const Deals = ({
    deal,
    deals,
    dealRow,
    dealSearch,
    addDealAction,
    deleteDealAction,
    editDealAction,
    selectDeal,
    setDealName,
    setDealAmount,
    setDealStage,
    setDealState,
    setDealSearch}: TypeDeals) => {
    return (
        <div>
            <ViewModeButton/>
            <Switch>
                <Route
                    path='/Deals/Table'
                    component={() => (
                        <DealTableRoute
                            deal={deal}
                            deals={deals}
                            dealRow={dealRow}
                            dealSearch={dealSearch}
                            addDealAction={addDealAction}
                            deleteDealAction={deleteDealAction}
                            editDealAction={editDealAction}
                            selectDeal={selectDeal}
                            setDealName={setDealName}
                            setDealAmount={setDealAmount}
                            setDealStage={setDealStage}
                            setDealSearch={setDealSearch}
                        />
                    )}
                />
                <Route
                    path='/Deals/Board'
                    component={() => (
                        <DealBoard
                            deals={deals}
                            setDealStage={setDealStage}
                            setDealState={setDealState}
                        />
                    )}
                />
            </Switch>
        </div>
    );
};

export default Deals;