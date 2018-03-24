//@flow
import React from 'react';
import {Route} from 'react-router-dom';
import Deals from './../../components/deals/deals';
import type {Deals as DealsType} from '../../types/Deals';

type TypeDealRoute = {
    dealRow: number,
    deals: DealsType,
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    addDealAction: () => void,
    deleteDealAction: () => void,
    selectDeal: (number) => void,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void
};

const DealRoute = ({
    deal,
    deals,
    dealRow,
    addDealAction,
    deleteDealAction,
    selectDeal,
    setDealName,
    setDealAmount,
    setDealStage}: TypeDealRoute) => {
    return (
        <Route
            path='/Deals'
            component={() => (
                <Deals
                    deal={deal}
                    deals={deals}
                    dealRow={dealRow}
                    addDealAction={addDealAction}
                    deleteDealAction={deleteDealAction}
                    selectDeal={selectDeal}
                    setDealName={setDealName}
                    setDealAmount={setDealAmount}
                    setDealStage={setDealStage}
                />
            )}
        />
    );
};

export default DealRoute;