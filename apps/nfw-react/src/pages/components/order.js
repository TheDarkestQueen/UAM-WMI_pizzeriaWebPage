import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getPizzaList, getIngredientList, removePizzaFromOrder, makeOrder} from '../redux/actions/pizza.actions'
import pizzaImg from '../assets/pizza1.jpg'
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";

function OrderListRender() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.pizzaReducer)

    useEffect(() => {
        dispatch(getPizzaList(dispatch));
        dispatch(getIngredientList(dispatch));
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

    return (
        <div>
            <section className="list-sector">
                <ul className="pizza-list">
                    {data.order.pizza.map(pizza => (
                        <li key={pizza.id}>
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
                <button className="order-button" onClick={ () => dispatch(makeOrder(dispatch)) }>Make Order</button>
            </section>
        </div>
    )
}

export default OrderListRender;