import React, { useEffect, useState } from 'react';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa'
import { Modal, MaterialInput, MaterialButton, DropdownMenu } from '../MaterialUI';
import './style.css';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signout } from '../../actions';


/**
* @author
* @function Header
**/

const Header = (props) => {

    const [loginModal, setLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userLogin = () => {
        dispatch(signin({ email, password }))
    }

    const userLogout = () => {
        dispatch(signout())
    }

    useEffect(()=>{
        auth.authenticate && setLoginModal(false)
    },[auth.authenticate])

    const renderLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    <a className="userName">
                        {`Hi ${auth.user.firstName}`}
                        <IoIosArrowDown />
                    </a>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    { label: 'Super Coin Zone', href: '', icon: null },
                    { label: 'Flipkart Plus Zone', href: '', icon: null },
                    { label: 'Orders', href: '', icon: null },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: 'My Chats', href: '', icon: null },
                    { label: 'Coupons', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                    { label: 'Notifications', href: '', icon: null },
                    { label: 'Logout', href: '', icon: null, onClick: userLogout },
                ]}
            />
        )
    }

    const renderNonLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    <a className="loginButton" onClick={() => setLoginModal(true)}>
                        <b>Login</b>
                    </a>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    { label: 'Flipkart Plus Zone', href: '', icon: null },
                    { label: 'Orders', href: '', icon: null },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: 'Rewards', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                ]}
                firstMenu={
                    <div className="firstmenu">
                        <span>New Customer?</span>
                        <a style={{ color: '#2874f0' }}>Sign Up</a>
                    </div>
                }
            />
        )
    }

    return (
        <div className="header">
            <Modal
                visible={loginModal}
                onClose={() => setLoginModal(false)}
            >
                <div className="authContainer">
                    <div className="row">
                        <div className="leftspace">
                            <h2>Login</h2>
                            <p style={{ lineHeight: 1.5, color: '#d7d7d7' }}>
                                Get access to your Orders, Wishlist and Recommendations
                            </p>
                        </div>
                        <div className="rightspace">
                            <MaterialInput
                                type="text"
                                label="Enter Email/Enter Mobile Number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <MaterialInput
                                type="password"
                                label="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            // rightElement={<a href="#">Forgot?</a>}
                            />
                            <MaterialButton
                                title="Login"
                                bgColor="#fb641b"
                                textColor="#ffffff"
                                style={{ margin: '30px 0 15px 0' }}
                                onClick={userLogin}
                            />
                            <p style={{ fontSize: 12, color: '#a7a7a7' }}>
                                OR
                            </p>
                            <MaterialButton
                                title="Request OTP"
                                bgColor="#ffffff"
                                textColor="#2874f0"
                                style={{ margin: '15px 0' }}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="subHeader">
                <div className="logo">
                    <NavLink to="/">
                        <img src={flipkartLogo} className="logoimage" alt="" />
                    </NavLink>
                    <a style={{ marginTop: '-10px' }}>
                        <span className="exploreText">Explore</span>
                        <span className="plusText">Plus</span>
                        <img src={goldenStar} className="goldenStar" alt="" />
                    </a>
                </div>
                <div style={{ padding: '0 10px' }}>
                    <div className="searchInputContainer">
                        <input
                            className="searchInput"
                            placeholder={'Search for products, brands and more'}
                        />
                        <div className="searchIconContainer">
                            <FaSearch style={{
                                color: '#2874f0',
                                fontSize: 18
                            }} />
                        </div>

                    </div>
                </div>
                <div className="rightMenu">
                    {
                        auth.authenticate ?
                            renderLoggedInMenu() :
                            renderNonLoggedInMenu()
                    }
                    <DropdownMenu
                        menu={
                            <a className="more">
                                <span>More</span>
                                <IoIosArrowDown />
                            </a>
                        }
                        menus={[
                            { label: 'Notification Preference', href: '', icon: null },
                            { label: 'Sell on flipkart', href: '', icon: null },
                            { label: '24x7 Customer Care', href: '', icon: null },
                            { label: 'Advertise', href: '', icon: null },
                            { label: 'Download App', href: '', icon: null }
                        ]}
                    />
                    <div>
                        <Link
                            to={'/cart'}
                            className="cart"
                        >
                            <IoIosCart />
                            <span style={{ margin: '0 10px' }}>Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;