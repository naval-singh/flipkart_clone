import React from "react";
import emptyCart from '../../../images/empty-cart.png'
import "./style.css";

/**
 * @author
 * @function NoItemView
 **/

const NoItemView = (props) => {
    return (
        <div className="noItemContainer">
            <h4>My Cart</h4>
            <div className="imageBlock">
                <img src={emptyCart} alt="" />
                <h4>Missing cart Items?</h4>
                <p>Login to see the items you added previously</p>
            </div>
        </div>
    );
};

export default NoItemView;
