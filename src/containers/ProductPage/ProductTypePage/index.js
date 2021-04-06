import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../../actions";
import { getParams } from "../../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { generatePublicURL } from "../../../urlConfig";

/**
 * @author
 * @function ProductTypePage
 **/

const ProductTypePage = (props) => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    useEffect(() => {
        const params = getParams(props.location.search);
        const payload = { params };
        dispatch(getPage(payload));
    }, []);

    return (
        <div style={{ margin: "0 10px" }}>
            <h3>{page.page.title}</h3>
            <Slider {...settings}>
                {page.page.banners &&
                    page.page.banners.map((item, index) => (
                        <a key={index} href={item.navigateTo} className="bannerImageContainer">
                            <img src={generatePublicURL(item.img)} alt="" />
                        </a>
                    ))}
            </Slider>
            <div className="productsContainer">
                {page.page.products &&
                    page.page.products.map((item, index) => (
                        <a key={index} href={item.navigateTo} className="productImageContainer">
                            <div className="shadow"></div>
                            <img src={generatePublicURL(item.img)} alt="" />
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default ProductTypePage;
