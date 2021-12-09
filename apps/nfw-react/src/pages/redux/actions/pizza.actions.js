export function getPizzaList(dispatch) {
    return {
        type: "GET_PIZZA_LIST",
        dispatch: dispatch
    };
}

export function getSauceList(dispatch) {
    return {
        type: "GET_SAUCE_LIST",
        dispatch: dispatch
    };
}

export function getIngredientList(dispatch) {
    return {
        type: "GET_INGREDIENT_LIST",
        dispatch: dispatch
    };
}

export function receivePizzaList(pizzaList) {
    return {
        type: "RECEIVE_PIZZA_LIST",
        pizzaList: pizzaList
    };
}

export function receiveSauceList(sauceList) {
    return {
        type: "RECEIVE_SAUCE_LIST",
        sauceList: sauceList
    };
}

export function receiveIngredientList(ingredientList) {
    return {
        type: "RECEIVE_INGREDIENT_LIST",
        ingredientList: ingredientList
    };
}

export function addPizzaToOrder(pizza) {
    return {
        type: "ADD_PIZZA_TO_ORDER",
        pizza: pizza
    };
}

export function addSauceToOrder(sauce) {
    return {
        type: "ADD_SAUCE_TO_ORDER",
        sauce: sauce
    };
}

export function removePizzaFromOrder(index) {
    return {
        type: "REMOVE_PIZZA_FROM_ORDER",
        index: index
    };
}

export function removeSauceFromOrder(index) {
    return {
        type: "REMOVE_SAUCE_FROM_ORDER",
        index: index
    };
}

export function makeOrder(dispatch) {
    return {
        type: "MAKE_ORDER",
        dispatch: dispatch
    };
}

export function successfulOrder() {
    return {
        type: "SUCCESSFUL_ORDER"
    };
}