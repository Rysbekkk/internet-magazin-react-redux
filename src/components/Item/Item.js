import React from 'react';
import s from './Item.module.css'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addItem, changeStatus } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
const Item = ({ item }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCartUI = (e) => {
        e.stopPropagation()
        dispatch(changeStatus(item.id))
    }

    return (
        <div
            className='col'
            onClick={() => navigate(`/details/${item.id}`)}
        >
            <div className={s.item__box}>
                <img src={item.img} alt="" />
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <Button
                    onClick={((e) => {
                        e.stopPropagation()
                        dispatch(addItem(item));

                    })}
                    style={
                        {
                            width: '100%',
                            margin: '10px 0 0 0'

                        }}
                    variant="contained">Add to Cart</Button>

                <div onClick={addToCartUI}>
                    {item.select ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </div>


            </div>
        </div>
    );
};

export default Item;