import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { addToCart, getProductById } from "../../actions";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import { generatePublicURL } from "../../urlConfig";

/**
 * @author
 * @function ProductDetailsPage
 **/

const ProductDetailsPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);

    const handleAddToCart = () => {
        const { _id, name, price, listPrice, productPictures } = product.productDetails;
        dispatch(
            addToCart({
                _id,
                name,
                price,
                listPrice,
                img: productPictures[0],
            })
        );
        props.history.push("/cart");
    };

    const percentage = (listPrice, price) => {
        return parseInt(100 - (parseInt(price) / parseInt(listPrice)) * 100);
    };

    useEffect(() => {
        dispatch(getProductById(props.match.params));
    }, []);

    if (Object.keys(product.productDetails).length === 0) {
        return null;
    }

    return (
        <Layout>
            <div className="productDescriptionContainer">
                <div className="flexRow">
                    <div className="verticalImageStack">
                        {product.productDetails.productPictures.map((thumb, index) => (
                            <div className="thumbnail">
                                <img src={generatePublicURL(thumb)} alt={thumb} />
                            </div>
                        ))}
                    </div>
                    <div className="productDescContainer">
                        <div className="productDescImgContainer">
                            <img
                                src={generatePublicURL(product.productDetails.productPictures[0])}
                                alt={`${product.productDetails.productPictures[0]}`}
                            />
                        </div>

                        {/* action buttons */}
                        <div className="flexRow">
                            <MaterialButton
                                title="ADD TO CART"
                                bgColor="#ff9f00"
                                textColor="#ffffff"
                                style={{
                                    marginRight: "5px",
                                }}
                                icon={<IoMdCart />}
                                onClick={handleAddToCart}
                            />
                            <MaterialButton
                                title="BUY NOW"
                                bgColor="#fb641b"
                                textColor="#ffffff"
                                style={{
                                    marginLeft: "5px",
                                }}
                                icon={<AiFillThunderbolt />}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    {/* home > category > subCategory > productName */}
                    <div className="breed">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                                <IoIosArrowForward />
                            </li>
                            <li>
                                <a href="#">Mobiles</a>
                                <IoIosArrowForward />
                            </li>
                            <li>
                                <a href="#">Samsung</a>
                                <IoIosArrowForward />
                            </li>
                            <li>
                                <a href="#">{product.productDetails.name}</a>
                            </li>
                        </ul>
                    </div>
                    {/* product description */}
                    <div className="productDetails">
                        <p className="productTitle">{product.productDetails.name}</p>
                        <div>
                            <span className="ratingCount">
                                4.3 <IoIosStar />
                            </span>
                            <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
                        </div>
                        <div className="extraOffer">
                            Extra <BiRupee />
                            4500 off{" "}
                        </div>
                        <div className="flexRow priceContainer">
                            <span className="price">
                                <BiRupee />
                                {product.productDetails.price}
                            </span>
                            <span className="listPrice">
                                &#8377;
                                {product.productDetails.listPrice}
                            </span>
                            <span className="discount">
                                {percentage(product.productDetails.listPrice, product.productDetails.price)}% off
                            </span>
                        </div>
                        <div>
                            <p
                                style={{
                                    color: "#212121",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                Available Offers
                            </p>
                            <p style={{ display: "flex" }}>
                                <span
                                    style={{
                                        width: "100px",
                                        fontSize: "12px",
                                        color: "#878787",
                                        fontWeight: "600",
                                        marginRight: "20px",
                                    }}
                                >
                                    Description
                                </span>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "#212121",
                                    }}
                                >
                                    {product.productDetails.description}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetailsPage;
