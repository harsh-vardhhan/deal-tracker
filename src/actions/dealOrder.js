//@flow
import type {
    TOGGLE_ORDER_ACTION
} from '../types/Action';
import type {Dispatch} from 'redux';
import {TOGGLE_ORDER} from '../constants/deals';

export const toggleDealOrder = () => (
    async (dispatch: Dispatch<TOGGLE_ORDER_ACTION>) => {
        dispatch({type: TOGGLE_ORDER});
    }
);