import React from 'react';
import s from './CartItem.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addItem, decreaseItem, changeStatus, deleteItem } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const { mainData } = useSelector(state => state.main)

    const status = mainData.reduce((acc, rec) => {
        if (rec.id === item.id) {
            return rec.select
        }
        return acc
    }, null)


    const total = item.quantity * item.price
    console.log(item)

    return (
        <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1' id={s.cartItem}>
            <div className="col">
                <div className={s.cartItem__img}>
                    <img src={item.img} alt="" />
                </div>
            </div>

            <div className="col">
                <div className={s.cartItem__logic}>
                    <div className={s.cartItem__first}>
                        <p><span>price:</span>{item.price}som</p>
                        <p><span>name:</span>{item.name}</p>
                        <p><span>Total:</span>{total} som</p>
                    </div>
                    <div className={s.cartItem__second}>
                        <RemoveIcon
                            onClick={() => dispatch(decreaseItem(item))}
                        // className={item.quantity === 1 ? s.disabled : null}
                        />
                        <p className={s.cartItem__quantity}>{item.quantity}</p>
                        <AddIcon
                            onClick={() => dispatch(addItem(item))}
                        />
                    </div>
                </div>
            </div>

            <div className="col">
                <div className={s.cartItem__icons}>
                    <DeleteForeverIcon
                        onClick={() => dispatch(deleteItem(item))}
                    />



                    <div onClick={() => dispatch(changeStatus(item.id))}>
                        {status
                            ? <FavoriteIcon />
                            : <FavoriteBorderIcon />
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItem;