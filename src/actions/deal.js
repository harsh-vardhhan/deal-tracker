//@flow
import {getDealsMock} from '../api/deal';
import {GET_DEALS, ADD_DEAL, DELETE_DEAL, EDIT_DEAL} from '../constants/deals';
import type {Deal} from '../types/Deal';

export const getDeals = () => {
    //$FlowFixMe
    return async (dispatch) => {
        const deals = await getDealsMock();
        dispatch({type: GET_DEALS, deals});
    };
};

export const addDeal = (deal: Deal) => {
    //$FlowFixMe
    return async (dispatch) => {
        dispatch({type: ADD_DEAL, deal});
    };
};

export const deleteDeal = (dealId: number) => {
    //$FlowFixMe
    return async (dispatch) => {
        dispatch({type: DELETE_DEAL, dealId});
    };
};

export const editDeal = (deal: Deal, dealId: number) => {
    //$FlowFixMe
    return async (dispatch) => {
        dispatch({type: EDIT_DEAL, deal, dealId});
    };
};