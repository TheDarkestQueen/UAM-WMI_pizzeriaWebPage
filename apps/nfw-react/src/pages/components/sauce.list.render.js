import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addSauceToOrder, getSauceList} from '../redux/actions/pizza.actions'
import sauceImg from '../assets/sauces.jpg'
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";

function SauceListRender() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.pizzaReducer)

    useEffect(() => {
        dispatch(getSauceList(dispatch));
    }, [])

    return (
        <div>
            <section className="list-sector">
                <ul className="pizza-list">
                    {data.sauceList.map(sauce => (
                        <li key={sauce.id}>
                            <img className="sauce-img" src={sauceImg} alt="sauces photo"></img>
                            <div className="pizza-view-button-order">
                                <div className="container-pizza-view">
                                    <div className="column">
                                        <div className="pizza-name"> {sauce.name} </div>
                                    </div>
                                    <div className="pizza-price"> {sauce.price} zł </div>
                                </div>
                                <button onClick={ () => dispatch(addSauceToOrder(sauce)) }>Add to order</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default SauceListRender;