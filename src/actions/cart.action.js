import { cartConstants } from "./constants";
import store from "../store";
import axios from "../helpers/axios";

const getCartItems = () => {
    return async dispatch => {

        dispatch({type: cartConstants.ADD_TO_CART_REQUEST})
        const res = await axios.post('/cart/getfromcart')
        if(res.data.status){
            const {cartItems} = res.data;
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: { cartItems },
            });
        }else{
            const {error} = res.data;
            dispatch({
                type: cartConstants.ADD_TO_CART_FAILURE,
                payload: { error },
            });
        }
    }
}

export const addToCart = (item, newQty=1) => {
    return async (dispatch) => {
        const { cart:{cartItems}, auth } = store.getState();
        const qty = cartItems[item._id] ? parseInt(cartItems[item._id].qty + newQty) : 1;
        cartItems[item._id] = { ...item, qty };
        if(auth.authenticate){
            dispatch({type: cartConstants.ADD_TO_CART_REQUEST})
            const payload = {
                cartItems: [{
                    product: item._id,
                    quantity: qty
                }]
            }
            console.log({payload1: payload})
            const res = await axios.post('/cart/addtocart', payload)
            res.data.status && dispatch(getCartItems())
        }else{
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }

        dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
        });
    };
};

export const updateCart = () => {
    return async (dispatch) => {
        const {auth} = store.getState()
        const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
        if(auth.authenticate){
            localStorage.removeItem('cart')
            if(cartItems){
                const payload = {
                    cartItems: Object.values(cartItems).map(item => {
                        return {
                            product: item._id,
                            quantity: item.qty,
                        }
                    })
                }
                console.log({payload2: payload})
                if(Object.keys(cartItems).length > 0){
                    const res = await axios.post('/cart/addtocart', payload)
                    res.data.status && dispatch(getCartItems())
                }
            }
        }else{
            if (cartItems) {
                dispatch({
                    type: cartConstants.ADD_TO_CART_SUCCESS,
                    payload: { cartItems },
                });
            }
        }
    };
};

export {getCartItems}