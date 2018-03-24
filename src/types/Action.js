//@flow
import type {Deals} from '../types/Deals';
import type {Deal} from '../types/Deal';

export type GET_DEALS_ACTION = {|
    type: 'GET_DEALS',
    deals: Deals
|}

export type ADD_DEALS_ACTION = {|
    type: 'ADD_DEALS',
    deal: Deal
|}

export type DELETE_DEAL_ACTION = {|
    type: 'DELETE_DEAL',
    dealItem: number
|}