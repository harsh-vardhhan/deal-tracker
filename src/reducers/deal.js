//@flow
import {GET_DEALS} from '../constants/deals';

export const dealReducer = (

    //$FlowFixMe
    state = [], action
) => {
    switch (action.type) {
    case GET_DEALS:
        return action.deals;
    default:
        return state;
    }
};