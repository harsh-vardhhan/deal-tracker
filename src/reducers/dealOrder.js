import type {Action} from '../types/Action';

export const dealOrderReducer = (
    state: bool = false,
    action: Action
) => {
    switch (action.type) {
    case 'TOGGLE_ORDER':
        return !state;
    default:
        return state;
    }
};