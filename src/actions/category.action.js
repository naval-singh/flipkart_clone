import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return async (dispatch) => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });
        const res = await axios.get("/category/display");
        if (res.data.status) {
            const { categoryList } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: { categories: categoryList },
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                payload: { error },
            });
        }
    };
};
