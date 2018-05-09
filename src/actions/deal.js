//@flow
import {
    getDealsData,
    postDealData,
    deleteDealData,
    editDealData
} from '../api/deal';
import {GET_DEALS, ADD_DEAL, DELETE_DEAL, EDIT_DEAL, SEARCH_DEAL} from '../constants/deals';
import type {Deal} from '../types/Deal';
import type {Dispatch} from 'redux';
import type {
    GET_DEALS_ACTION,
    ADD_DEALS_ACTION,
    DELETE_DEAL_ACTION,
    EDIT_DEAL_ACTION,
    SEARCH_DEAL_ACTION
} from '../types/Action';

export const searchDeal = (dealName: string) => (
    async (dispatch: Dispatch<SEARCH_DEAL_ACTION>) => {
        const deals = await getDealsData();
        dispatch({type: SEARCH_DEAL, deals, dealName});
    }
);

export const getDeals = () => (
    async (dispatch: Dispatch<GET_DEALS_ACTION>) => {
        const deals = await getDealsData();
        dispatch({type: GET_DEALS, deals});
    }
);

export const addDeal = (deal: Deal) => (
    (dispatch: Dispatch<ADD_DEALS_ACTION>) => {
        postDealData(deal);
        dispatch({type: ADD_DEAL, deal});
    }
);

export const deleteDeal = (deal: Deal) => (
    (dispatch: Dispatch<DELETE_DEAL_ACTION>) => {
        deleteDealData(deal);
        dispatch({type: DELETE_DEAL, deal});
    }
);

export const editDeal = (deal: Deal) => (
    (dispatch: Dispatch<EDIT_DEAL_ACTION>) => {
        editDealData(deal);
        dispatch({type: EDIT_DEAL, deal});
    }
);