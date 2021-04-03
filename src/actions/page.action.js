import axiosInstance from "../helpers/axios";
import { pageConstants } from "./constants";

export const getPage = (payload) => {
    return async (dispatch) => {
        const { cid, type } = payload.params;
        dispatch({ type: pageConstants.GET_PRODUCT_PAGE_REQUEST });
        const res = await axiosInstance.get(`/page/display/${cid}/${type}`);
        if (res.data.status) {
            const { page } = res.data;
            dispatch({
                type: pageConstants.GET_PRODUCT_PAGE_SUCCESS,
                payload: { page },
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: pageConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: { error },
            });
        }
    };
};
