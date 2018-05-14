//@flow
import {createSelector} from 'reselect';
import type {State} from '../types/State';

const dealSelector = (state: State) => state.dealReducer;
const dealNameSelector = (state: State) => state.dealSearchReducer;

export const filterDeals = createSelector(dealSelector, dealNameSelector,
    (dealReducer, dealSearchReducer) => dealReducer.filter((item) => item.name.includes(dealSearchReducer)));