import React from "react";
import PizzaListRender from "./components/pizza.list.render";
import SauceListRender from "./components/sauce.list.render";

function MainPage() {
    return (
        <div className="main-page">
            <h1>Pizzas</h1>
            <PizzaListRender></PizzaListRender>
            <h1>Sauces</h1>
            <SauceListRender></SauceListRender>
        </div>
    )
}

export default MainPage;