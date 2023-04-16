import React from 'react';
import s from './Home.module.css'
import Item from '../../components/Item/Item';
import { useSelector } from 'react-redux';

const Home = () => {

    const { mainData } = useSelector(state => state.main)
    console.log(mainData)
    const items = mainData.map(item =>
        <Item
            item={item}
            key={item.id}
        />
    )
    return (
        <section id={s.home}>
            <div className="container">
                <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {items}
                </div>
            </div>
        </section>
    );
};

export default Home;