import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProduct } from '../../redux/actions/actions';

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { mainData } = useSelector(state => state.main)
    console.log(mainData)
    const { data } = useSelector(state => state.details)

    const findItemById = mainData.reduce((acc, rec) => {
        if (rec.id.toString() === id) {
            return rec
        }
        return acc
    }, {})

    console.log(findItemById)

    useEffect(() => {
        dispatch(selectProduct(findItemById))
    }, [dispatch, findItemById])

    console.log(data)

    return (
        <section>
            <div className="container">
                <h2>Details</h2>
                <div className="row">
                    {data && (
                        <>
                            <img src={data.img} alt={data.title} />
                            <div>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Details;