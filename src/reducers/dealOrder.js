//@flow
import type {Action} from '../types/Action';
import {TOGGLE_ORDER} from '../constants/deals';

export const dealOrderReducer = (
    state: bool = false,
    action: Action
) => {
    switch (action.type) {
    case TOGGLE_ORDER:
        return !state;
    default:
        return state;
    }
};