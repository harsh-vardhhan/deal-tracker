//@flow
export const dealSearchReducer = (
    state: string = '',
    action
) => {
    switch (action.type) {
    case 'EDIT_DEAL_SEARCH_ACTION':
        return action.dealSearch;
    default:
        return state;
    }
};