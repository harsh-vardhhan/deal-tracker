//@flow
import {createSelector} from 'reselect';
import type {State} from '../types/State';

const dealSelector = (state: State) => state.dealReducer;
const dealNameSelector = (state: State) => state.dealSearchReducer;
const dealOrderSelector = (state: State) => state.dealOrderReducer;

export const filterDeal = createSelector(dealSelector, dealOrderSelector, dealNameSelector,
    (dealReducer, dealOrderReducer, dealSearchReducer) => {
        const filter = dealReducer.filter((item) => item.name.includes(dealSearchReducer));
        if (dealOrderReducer === false) {
            return filter;
        } else {
            return filter.slice().reverse();
        }
    }
);