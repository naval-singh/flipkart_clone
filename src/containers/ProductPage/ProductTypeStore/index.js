import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";
import "./style.css";
import { generatePublicURL } from "../../../urlConfig";

/**
 * @author
 * @function ProductTypeStore
 **/

const ProductTypeStore = (props) => {
    const product = useSelector((state) => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: "5K",
        under10k: "10K",
        under15k: "15K",
        under20k: "20K",
        under30k: "30K",
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const { slug } = props.match.params;
        console.log(props);
        dispatch(getProductBySlug(slug));
    }, []);

    return (
        <>
            {Object.keys(product.productsByPrice).map((key, index) => {
                return (
                    <div className="card">
                        <div className="cardHeader">
                            <div>
                                {props.match.params.slug} Mobile Under &#8377;{priceRange[key]}
                            </div>
                            <a href="#">View All</a>
                        </div>
                        <div style={{ display: "flex" }}>
                            {product.productsByPrice[key].slice(0, 6).map((product) => (
                                <Link
                                    to={`/${product.slug}/${product._id}/p`}
                                    className="productContainer"
                                >
                                    <div className="productImgContainer">
                                        <img src={generatePublicURL(product.productPictures[0])} alt="" />
                                    </div>
                                    <div className="productInfo">
                                        <div className="productName" style={{ margin: "5px 0" }}>
                                            {product.name.split(")")[0]})
                                        </div>
                                        <div>
                                            <span className="rating">
                                                4.2&nbsp;
                                                <GoStar style={{ paddingTop: "2px" }} />
                                            </span>
                                            &nbsp;
                                            <span>10492</span>
                                        </div>
                                        <div className="productPrice">&#8377; {product.price}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProductTypeStore;
