import { productConstants } from "../actions/constants";

const initialState = {
    error: null,
    loading: false,
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: [],
    },
};
export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCT_BY_SLUG_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case productConstants.GET_PRODUCT_BY_SLUG_SUCCESS:
            state = {
                ...state,
                loading: false,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice,
                },
            };
            break;
        case productConstants.GET_PRODUCT_BY_SLUG_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
    }
    return state;
};
