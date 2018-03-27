//@flow
import React from 'react';
import {Route} from 'react-router-dom';
import Deals from './../../components/deals/deals';
import type {Deals as DealsType} from '../../types/Deals';
import type {Deal as DealType} from '../../types/Deal';

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
    editDealAction: () => void,
    selectDeal: (number) => void,
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void,
    setDealState: (DealType) => void
};

const DealRoute = ({
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
    setDealState}: TypeDealRoute) => {
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
                    editDealAction={editDealAction}
                    selectDeal={selectDeal}
                    setDealName={setDealName}
                    setDealAmount={setDealAmount}
                    setDealStage={setDealStage}
                    setDealState={setDealState}
                />
            )}
        />
    );
};

export default DealRoute;