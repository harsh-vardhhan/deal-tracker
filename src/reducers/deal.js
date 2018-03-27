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
        return [...state, {...action.deal, id: Math.random()}];
    case DELETE_DEAL:
        const dealId = action.dealId;
        return state.filter((value) => value.id !== dealId);
    case EDIT_DEAL:
        const deal = action.deal;
        return state.map((value) => {
            if (value.id === deal.id) {
                return {...value, ...deal};
            }
            return value;
        });
    default:
        return state;
    }
};