import React from "react";
import "./style.css";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="section-1">
                <div>
                    <h5><span>about</span></h5>
                    <ul>
                        <li><span>contact us</span></li>
                        <li><span>about us</span></li>
                        <li><span>careers</span></li>
                        <li><span>flipkart stories</span></li>
                        <li><span>press</span></li>
                        <li><span>flipkart wholesale</span></li>
                    </ul>
                </div>
                <div>
                    <h5><span>help</span></h5>
                    <ul>
                        <li><span>payment</span></li>
                        <li><span>shipping</span></li>
                        <li><span>cancellation &amp; returns</span></li>
                        <li><span>FAQ</span></li>
                        <li><span>report infringement</span></li>
                    </ul>
                </div>
                <div>
                    <h5><span>policy</span></h5>
                    <ul>
                        <li><span>return policy</span></li>
                        <li><span>terms of use</span></li>
                        <li><span>security</span></li>
                        <li><span>privacy</span></li>
                        <li><span>sitemap</span></li>
                        <li><span>erp compliance</span></li>
                    </ul>
                </div>
                <div>
                    <h5><span>social</span></h5>
                    <ul>
                        <li><span>facebook</span></li>
                        <li><span>twitter</span></li>
                        <li><span>youtube</span></li>
                    </ul>
                </div>
            </div>
            <div className="section-2">
                <a>sell on flipkart</a>
                <a>advertise</a>
                <span>&copy; 2021 Flipkart Clone created by Naval Verma</span>
                <a>gift cards</a>
                <a>help center</a>
            </div>
        </div>
    );
};

export default Footer;
