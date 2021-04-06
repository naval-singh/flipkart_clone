import { cartConstants } from "./constants";
import store from "../store";

export const addToCart = (item, newQty=1) => {
    return async (dispatch) => {
        const { cartItems } = store.getState().cart;
        const qty = cartItems[item._id] ? parseInt(cartItems[item._id].qty + newQty) : 1;
        cartItems[item._id] = { ...item, qty };
        localStorage.setItem("cart", JSON.stringify(cartItems));
        dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
        });
    };
};

export const updateCart = () => {
    return async (dispatch) => {
        const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
        if (cartItems) {
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: { cartItems },
            });
        }
    };
};
