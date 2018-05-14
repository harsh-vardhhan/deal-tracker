//@flow
import type {
    EDIT_DEAL_SEARCH_ACTION
} from '../types/Action';
import type {Dispatch} from 'redux';
import {EDIT_DEAL_SEARCH} from '../constants/deals';

export const editDealSearch = (dealSearch: string) => (
    async (dispatch: Dispatch<EDIT_DEAL_SEARCH_ACTION>) => {
        dispatch({type: EDIT_DEAL_SEARCH, dealSearch});
    }
);