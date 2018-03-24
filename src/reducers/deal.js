//@flow
import {GET_DEALS, ADD_DEAL, DELETE_DEAL} from '../constants/deals';

export const dealReducer = (

    //$FlowFixMe
    state = [], action
) => {
    switch (action.type) {
    case GET_DEALS:
        return action.deals;
    case ADD_DEAL:
        return [...state, action.deal];
    case DELETE_DEAL:
        const dealItem = action.dealItem;
        return state.filter((value, i) => i !== dealItem);
    default:
        return state;
    }
};