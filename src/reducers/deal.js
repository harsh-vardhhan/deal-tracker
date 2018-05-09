//@flow
import {GET_DEALS, ADD_DEAL, DELETE_DEAL, EDIT_DEAL, SEARCH_DEAL} from '../constants/deals';
import type {Action} from '../types/Action';
import type {Deals} from '../types/Deals';

export const dealReducer = (
    state: Deals = [],
    action: Action
) => {
    switch (action.type) {
    case SEARCH_DEAL:
        const dealName = action.dealName;
        const deals = action.deals;
        return deals.filter((value) => value.name.includes(dealName));
    case GET_DEALS:
        return action.deals;
    case ADD_DEAL:
        return [...state, {...action.deal, _id: Math.random().toString()}];
    case DELETE_DEAL:
        const deal = action.deal;
        return state.filter((value) => value._id !== deal._id);
    case EDIT_DEAL:
        const updatedDeal = action.deal;
        return state.map((value) => {
            if (value._id === updatedDeal._id) {
                return {...value, ...updatedDeal};
            }
            return value;
        });
    default:
        return state;
    }
};