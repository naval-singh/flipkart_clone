import React, { useState } from "react";
import { generatePublicURL } from "../../../urlConfig";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./style.css";

/**
 * @author
 * @function CartItems
 **/

const CartItems = (props) => {
    const [qty, setQty] = useState(props.item.qty);
    console.log({items: props.item})

    const { _id, name, img, price, listPrice } = props.item;

    const increaseQty = () => {
        setQty(qty + 1);
        props.onQtyInc(_id, qty + 1);
    };
    const decreaseQty = () => {
        if (qty == 1) return;
        setQty(qty - 1);
        props.onQtyDec(_id, qty - 1);
    };

    return (
        <div className="showProductMainContainer">
            <div className="showProductContainer">
                <div className="cartImgContainer">
                    <img src={generatePublicURL(img)} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>
                        &#8377;{price}
                        <span>&#8377;{listPrice}</span>
                    </p>
                </div>
            </div>
            <div className="itemActions">
                <div className="setQuantity">
                    <button onClick={decreaseQty}>
                        <FaMinus />
                    </button>
                    <input value={qty} readOnly />
                    <button onClick={increaseQty}>
                        <FaPlus />
                    </button>
                </div>
                <button>save for later</button>
                <button>remove item</button>
            </div>
        </div>
    );
};

export default CartItems;
