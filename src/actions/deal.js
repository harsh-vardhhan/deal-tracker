//@flow
import {getDealsMock} from '../api/deal';
import {GET_DEALS} from '../constants/deals';

export const getDeals = () => {
    //$FlowFixMe
    return async (dispatch) => {
        const deals = await getDealsMock();
        dispatch({type: GET_DEALS, deals});
    };
};