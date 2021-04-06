import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions";
import Layout from "../../components/Layout";
import CartItem from "./CartItems";
import NoItemView from "./NoItemView";

/**
 * @author
 * @function CartPage
 **/

const CartPage = (props) => {

    const [totalPrice, setTotalPrice] = useState();
    const [totalDiscount, setTotalDiscount] = useState();
    const [deliveryCharge, setDeliveryCharge] = useState();
    const [totalAmount, setTotalAmount] = useState();
    const [checkQty, setCheckQty] = useState();

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const length = Object.keys(cart.cartItems).length;
    const cartItems = Object.values(cart.cartItems);

    // const finalCalculation = ()=>{
    //     let totalListPrice=0;
    //     let totalPrice=0;
    //     cartItems.map(item => {
    //         totalListPrice = parseInt(totalListPrice+(item.listPrice * item.qty))
    //         totalPrice = parseInt(totalPrice + (item.price * item.qty))
    //     })
    //     setTotalPrice(totalListPrice)
    //     setTotalDiscount(totalListPrice-totalPrice)
    //     setTotalAmount(totalPrice)
    // }

    // useEffect(()=>{
    //     finalCalculation()
    // },[cart.cartItems])

    // useEffect(()=>{
    //     finalCalculation()
    // },[checkQty])

    const increaseQty = (_id, qty) => {
        // setCheckQty(qty)
        const { name, price, listPrice, img } = cart.cartItems[_id];
        dispatch(addToCart({ _id, name, price, listPrice, img }, 1));
    };
    const decreaseQty = (_id, qty) => {
        // setCheckQty(qty)
        const { name, price, listPrice, img } = cart.cartItems[_id];
        dispatch(addToCart({ _id, name, price, listPrice, img }, -1));
    };

    const renderItemView = () => {
        return (
            <div className="cartItemsContainer">
                <section className="sectionLeft">
                    <h3>My Cart ({length})</h3>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} onQtyInc={increaseQty} onQtyDec={decreaseQty} />
                    ))}
                </section>

                <section className="sectionRight">
                    <h3>Price Details</h3>
                    {/* <div className="rightContent">
                        <div className="rightContentItems">
                            <span>Price ({length} items)</span>
                            <span>&#8377;{totalPrice}</span>
                        </div>
                        <div className="rightContentItems">
                            <span>Discount</span>
                            <span style={{ color: "#06c510" }}>- &#8377;{totalDiscount}</span>
                        </div>
                        <div className="rightContentItems">
                            <span>Delivery Charges</span>
                            <span style={{ color: "#06c510" }}>FREE</span>
                        </div>
                        <div className="totalAmount">
                            <span>Total Amount</span>
                            <span>&#8377;{totalAmount}</span>
                        </div>
                        <h4>You will save &#8377;{totalDiscount} on this order</h4>
                    </div> */}
                </section>
            </div>
        );
    };

    return <Layout>{length > 0 ? renderItemView() : <NoItemView />}</Layout>;
};

export default CartPage;
