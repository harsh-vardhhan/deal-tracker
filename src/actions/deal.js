//@flow
import {
    getDealsData,
    postDealData
} from '../api/deal';
import {GET_DEALS, ADD_DEAL, DELETE_DEAL, EDIT_DEAL} from '../constants/deals';
import type {Deal} from '../types/Deal';
import type {Dispatch} from 'redux';
import type {
    GET_DEALS_ACTION,
    ADD_DEALS_ACTION,
    DELETE_DEAL_ACTION,
    EDIT_DEAL_ACTION
} from '../types/Action';

export const getDeals = () => (
    async (dispatch: Dispatch<GET_DEALS_ACTION>) => {
        const deals = await getDealsData();
        dispatch({type: GET_DEALS, deals});
    }
);

export const addDeal = (deal: Deal) => (
    async (dispatch: Dispatch<ADD_DEALS_ACTION>) => {
        postDealData(deal);
        dispatch({type: ADD_DEAL, deal});
    }
);

export const deleteDeal = (dealId: number) => (
    async (dispatch: Dispatch<DELETE_DEAL_ACTION>) => {
        dispatch({type: DELETE_DEAL, dealId});
    }
);

export const editDeal = (deal: Deal, dealId: number) => (
    async (dispatch: Dispatch<EDIT_DEAL_ACTION>) => {
        dispatch({type: EDIT_DEAL, deal, dealId});
    }
);