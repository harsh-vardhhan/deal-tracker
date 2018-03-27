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
    setDealState: (DealType) => void
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
    setDealStage,
    setDealState}: TypeDeals) => {
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