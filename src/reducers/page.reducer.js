import { pageConstants } from "../actions/constants";

const initialState = {
    page: {},
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case pageConstants.GET_PRODUCT_PAGE_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case pageConstants.GET_PRODUCT_PAGE_SUCCESS:
            state = {
                ...state,
                loading: false,
                page: action.payload.page,
            };
            break;
        case pageConstants.GET_PRODUCT_PAGE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
    }
    return state;
};
