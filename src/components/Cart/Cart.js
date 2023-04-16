import React from 'react';
import s from './Cart.module.css';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from '../CartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ toggle, handleToggle }) => {

    const { cartItems } = useSelector(state => state.cart)

    const totalOfAllProducts = cartItems.reduce((acc, rec) => {
        return acc + rec.quantity * rec.price
    }, 0)

    console.log(cartItems)

    const items = cartItems.map(item =>
        <CartItem
            key={item.id}
            item={item}
        />
    )

    return (
        <div className={toggle
            ? `${s.cart__modal} ${s.show}`
            : s.cart__modal
        }
        >
            <div className={s.cart__wrap}>
                <p>Total Price:{totalOfAllProducts} som</p>
                <div
                    onClick={handleToggle}
                    className={s.cart__exit}>
                    <CloseIcon />
                </div>
            </div>


            <div className={s.cart__content}>
                {items}
            </div>

        </div>
    );
};

export default Cart;