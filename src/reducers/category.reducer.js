import { categoryConstants } from "../actions/constants";

const initialState = {
    categories: [],
    error: null,
    loading: false,
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                categories: action.payload.categories,
            };
            break;
        case categoryConstants.GET_ALL_CATEGORY_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
    }
    return state;
};
