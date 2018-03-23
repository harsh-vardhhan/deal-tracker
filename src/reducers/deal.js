//@flow
import {GET_DEALS, ADD_DEAL} from '../constants/deals';

export const dealReducer = (

    //$FlowFixMe
    state = [], action
) => {
    switch (action.type) {
    case GET_DEALS:
        return action.deals;
    case ADD_DEAL:
        return [...state, action.deal];
    default:
        return state;
    }
};