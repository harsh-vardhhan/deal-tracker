//@flow
import type {Deals} from '../types/Deals';

export type GET_DEALS_ACTION = {|
    type: 'GET_DEALS',
    deals: Deals
|}