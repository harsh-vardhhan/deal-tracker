//@flow

export const editDealSearch = (dealSearch: String) => (
    async (dispatch) => {
        dispatch({type: 'EDIT_DEAL_SEARCH_ACTION', dealSearch});
    }
);