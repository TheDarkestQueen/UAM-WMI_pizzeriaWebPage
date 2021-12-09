import { receivePizzaList, receiveIngredientList, receiveSauceList } from "../actions/pizza.actions";

export function pizzaReducer(
    state = { 
        pizzaList: [], 
        ingredientList: [],
        sauceList: [],
        order: {
            pizza: [],
            sauce: [],
            total: 0
        }}, 
    action) {
    switch (action.type) {
        case 'GET_PIZZA_LIST':

            fetch('http://localhost:3333/api/pizza')
            .then(response => {
                    return response.json();
            })
            .then(pizza_list => {
                action.dispatch(receivePizzaList(pizza_list));
            })
            return {...state};

        case 'GET_SAUCE_LIST':

            fetch('http://localhost:3333/api/sauce')
            .then(response => {
                    return response.json();
            })
            .then(sauce_list => {
                action.dispatch(receiveSauceList(sauce_list));
            })
            return {...state};

        case 'GET_INGREDIENT_LIST':
            
            fetch('http://localhost:3333/api/ingredient')
            .then(response => {
                    return response.json();
            })
            .then(ingredient_list => {
                action.dispatch(receiveIngredientList(ingredient_list));
            })
            return {...state};
        
        case 'RECEIVE_PIZZA_LIST':
            state.pizzaList = action.pizzaList;
            return {...state};

        case 'RECEIVE_SAUCE_LIST':
            state.sauceList = action.sauceList;
            return {...state};

        case 'RECEIVE_INGREDIENT_LIST':
            state.ingredientList = action.ingredientList;
            return {...state};

        case 'ADD_PIZZA_TO_ORDER':
            //dodawanie pizzy
        
        case 'ADD_SAUCE_TO_ORDER':
            //dodawanie sosu

        case 'REMOVE_PIZZA_FROM_ORDER':
            //usuwanie pizzy

        case 'REMOVE_SAUCE_FROM_ORDER':
            //usuwanie sosu

        default:
            console.log("no action", action)
            return state;
     }
}