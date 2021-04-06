import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const getProductBySlug = (slug) => {
    return async (dispatch) => {
        dispatch({ type: productConstants.GET_PRODUCT_BY_SLUG_REQUEST });
        const res = await axios.get(`/product/display/${slug}`);

        if (res.data.status) {
            dispatch({
                type: productConstants.GET_PRODUCT_BY_SLUG_SUCCESS,
                payload: res.data,
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCT_BY_SLUG_FAILURE,
                payload: { error },
            });
        }
    };
};

export const getProductById = (payload) => {
    return async (dispatch) => {
        const {productId} = payload
        dispatch({ type: productConstants.GET_PRODUCT_BY_ID_REQUEST });
        const res = await axios.post(`/product/display/${productId}`);
        if (res.data.status) {
            const { product } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
                payload: { product },
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCT_BY_ID_FAILURE,
                payload: { error },
            });
        }
    };
};
