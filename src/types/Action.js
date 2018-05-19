//@flow
import type {Deals} from '../types/Deals';
import type {Deal} from '../types/Deal';

export type GET_DEALS_ACTION = {|
    type: 'GET_DEALS',
    deals: Deals
|}

export type ADD_DEALS_ACTION = {|
    type: 'ADD_DEAL',
    deal: Deal
|}

export type DELETE_DEAL_ACTION = {|
    type: 'DELETE_DEAL',
    deal: Deal
|}

export type EDIT_DEAL_ACTION = {|
    type: 'EDIT_DEAL',
    deal: Deal
|}

export type EDIT_DEAL_SEARCH_ACTION = {|
    type: 'EDIT_DEAL_SEARCH',
    dealSearch: string
|}

export type TOGGLE_ORDER_ACTION = {|
    type: 'TOGGLE_ORDER'
|}

export type DealAction =
    | GET_DEALS_ACTION
    | ADD_DEALS_ACTION
    | DELETE_DEAL_ACTION
    | EDIT_DEAL_ACTION

export type Action =
    | TOGGLE_ORDER_ACTION
    | EDIT_DEAL_SEARCH_ACTION
    | DealAction
