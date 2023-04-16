import React from 'react';
import s from './Special.module.css'
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Item/Item';
const Special = () => {

    const { mainData } = useSelector(state => state.main)

    const filteredData = mainData.filter(el => el.select)

    const items = filteredData.map(item =>
        <Item
            item={item}
            key={item.id}
        />
    )

    return (
        <section id={s.special}>
            <div className="container">
                <h2>Special</h2>
                <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {items}
                </div>
            </div>
        </section>
    );
};

export default Special;