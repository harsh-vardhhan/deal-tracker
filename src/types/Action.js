//@flow
import type {Deals} from '../types/Deals';
import type {Deal} from '../types/Deal';

export type REVERSE_DEALS_ACTION = {|
    type: 'REVERSE_DEALS',
    deals: Deals
|}

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

export type Action =
    | EDIT_DEAL_SEARCH_ACTION
    | REVERSE_DEALS_ACTION
    | GET_DEALS_ACTION
    | ADD_DEALS_ACTION
    | DELETE_DEAL_ACTION
    | EDIT_DEAL_ACTION
