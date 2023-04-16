import React, { useState } from 'react';
import BadgeCart from '../../components/BadgeCart/BadgeCart';
import Cart from '../../components/Cart/Cart';
import s from './Header.module.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const { cartItems } = useSelector(state => state.cart)

    const cartLength = cartItems.reduce((acc, rec) => {
        return acc + rec.quantity
    }, 0)

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    console.log(toggle)
    return (
        <>
            <header>
                <div className="container">
                    <div className={s.header__nav}>
                        <NavLink to='/'>Home</NavLink>
                        <div className={s.header__cart}>
                            <NavLink to='/special'>Special</NavLink>
                            <BadgeCart
                                cartLength={cartLength}
                                handleToggle={handleToggle}
                            />

                        </div>
                    </div>
                </div>
            </header>
            <Cart
                toggle={toggle}
                handleToggle={handleToggle}
            />
        </>
    );
};

export default Header;