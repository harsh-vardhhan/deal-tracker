//@flow
import {GET_DEALS, ADD_DEAL, DELETE_DEAL, EDIT_DEAL} from '../constants/deals';
import type {Action} from '../types/Action';
import type {Deals} from '../types/Deals';

export const dealReducer = (
    state: Deals = [],
    action: Action
) => {
    switch (action.type) {
    case GET_DEALS:
        return action.deals;
    case ADD_DEAL:
        return [...state, action.deal];
    case DELETE_DEAL:
        const dealItem = action.dealItem;
        return state.filter((value, i) => i !== dealItem);
    case EDIT_DEAL:
        const deal = action.deal;
        return state.map((value, i) => {
            if (i === action.dealRow) {
                return {...value, ...deal};
            }
            return value;
        });
    default:
        return state;
    }
};