import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getPizzaList, getIngredientList, getSauceList, removePizzaFromOrder, removeSauceFromOrder, makeOrder} from '../redux/actions/pizza.actions'
import pizzaImg from '../assets/pizza1.jpg'
import sauceImg from '../assets/sauces.jpg'
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";

function OrderListRender() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.pizzaReducer)

    useEffect(() => {
        dispatch(getPizzaList(dispatch));
        dispatch(getIngredientList(dispatch));
        dispatch(getSauceList(dispatch));
        console.log(data.order);
    }, [])

    function IngredientsOnPizza(pizza) {
        const pizzaIngredients = [];
        for( let i = 0; i < pizza.ingredients.length; i++) {
            for( let j = 0; j < data.ingredientList.length; j++) {
                if(pizza.ingredients[i] == data.ingredientList[j].id) {
                    pizzaIngredients[i] = data.ingredientList[j].name;
                }
            }
        }
        return pizzaIngredients.join(", ");
    }

    if(data.orderStatus == "In progress") {
        return (
        <div className="order-status">
            <h1>Loading...</h1>
        </div>
        )
    } else if(data.orderStatus == "Success") {
        return (
        <div className="order-status">
            <h1>Ordered successfully!</h1>
        </div>
        )
    }

    return (
        <div>
            <section className="list-sector">
            {(data.order.pizza.length != 0)? <h1> Final cost: {data.order.total} zł </h1>
                : <h1> There is nothing in the order </h1>}
                <ul className="pizza-list">
                    {data.order.pizza.map((pizza, index) => (
                        <li key={index}>
                            <img className="pizza-img" src={pizzaImg} alt="pizza photo"></img>
                            <div className="pizza-view-button-order">
                                <div className="container-pizza-view">
                                    <div className="column">
                                        <div className="pizza-name"> {pizza.name} </div>
                                        <div>
                                            {IngredientsOnPizza(pizza)}
                                        </div>
                                    </div>
                                    <div className="pizza-price"> {pizza.price} zł </div>
                                </div>
                                <button onClick={ () => dispatch(removePizzaFromOrder(pizza)) }>Remove from order</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="list-sector">
                <ul className="pizza-list">
                    {data.order.sauce.map((sauce, index) => (
                        <li key={index}>
                            <img className="sauce-img" src={sauceImg} alt="sauces photo"></img>
                            <div className="pizza-view-button-order">
                                <div className="container-pizza-view">
                                    <div className="column">
                                        <div className="pizza-name"> {sauce.name} </div>
                                    </div>
                                    <div className="pizza-price"> {sauce.price} zł </div>
                                </div>
                                <button onClick={ () => dispatch(removeSauceFromOrder(sauce)) }>Remove from order</button>
                            </div>
                        </li>
                    ))}
                </ul>
                {(data.order.pizza.length != 0)?<button className="order-button" onClick={ () => dispatch(makeOrder(dispatch)) }>Make Order</button>: ""}
            </section>
        </div>
    )
}

export default OrderListRender;