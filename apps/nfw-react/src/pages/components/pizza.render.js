import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getPizzaList, getIngredientList} from '../redux/actions/pizza.actions'
import pizzaImg from '../assets/pizza1.jpg'
import { useEffect, useState } from "react";

function PizzaRender() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.pizzaReducer)

    useEffect(() => {
        dispatch(getPizzaList(dispatch));
        dispatch(getIngredientList(dispatch));
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
                    {data.pizzaList.map(pizza => (
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
                                <button>Add to order</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default PizzaRender;