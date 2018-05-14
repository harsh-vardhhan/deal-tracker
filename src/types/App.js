//@flow
import type {Deals as DealsType} from './Deals';
import type {Deal as DealType} from './Deal';
import type {
    GET_DEALS_ACTION,
    ADD_DEALS_ACTION,
    DELETE_DEAL_ACTION,
    EDIT_DEAL_ACTION,
    EDIT_DEAL_SEARCH_ACTION,
    TOGGLE_ORDER_ACTION
} from './Action';

export type Props = {
    actions: {
        reverseDeals: (DealsType) => void,
        getDeals: () => GET_DEALS_ACTION,
        addDeal: (DealType) => ADD_DEALS_ACTION,
        deleteDeal: (DealType) => DELETE_DEAL_ACTION,
        editDeal: (DealType) => EDIT_DEAL_ACTION,
        editDealSearch: (string) => EDIT_DEAL_SEARCH_ACTION,
        toggleDealOrder: () => TOGGLE_ORDER_ACTION
    },
    deals: DealsType,
    dealSearch: string
};

export type State = {
    loggedIn: bool,
    dealRow: number,
    deal: {
        _id: string,
        name: string,
        amount: number,
        stage: number
    }
};