//@flow
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import type {Deals as DealsType} from './../../types/Deals';
import DealTableRoute from './dealTableRoute';
import ViewModeButton from './viewModeButton';
import DealBoard from './dealBoard/dealBoard';
import type {Deal as DealType} from '../../types/Deal';

type Props = {
    dealRow: number,
    dealSearch: string,
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    deals: DealsType,
    addDealAction : () => void,
    reverseDealsAction: () => void,
    deleteDealAction: () => void,
    editDealAction: () => void,
    selectDeal: (number) => void,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void,
    setDealState: (DealType) => void,
    setDealSearch: (string) => void
};

const Deals = ({
    deal,
    deals,
    dealRow,
    dealSearch,
    addDealAction,
    reverseDealsAction,
    deleteDealAction,
    editDealAction,
    selectDeal,
    setDealName,
    setDealAmount,
    setDealStage,
    setDealState,
    setDealSearch}: Props) => {
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
                            reverseDealsAction={reverseDealsAction}
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