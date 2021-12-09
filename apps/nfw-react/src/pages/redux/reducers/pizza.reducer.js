import { receivePizzaList, receiveIngredientList, receiveSauceList, successfulOrder } from "../actions/pizza.actions";

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
            state.order.pizza.push(action.pizza);
            state.order.total = state.order.total + action.pizza.price;
            return {...state};
        
        case 'ADD_SAUCE_TO_ORDER':
            state.order.sauce.push(action.sauce);
            state.order.total = state.order.total + action.sauce.price;
            return {...state};

        case 'REMOVE_PIZZA_FROM_ORDER':
            for( let i = 0; i < state.order.pizza.length; i++) {
                if(state.order.pizza[i].name == action.pizza.name) {
                    state.order.pizza.splice(i, 1);
                    state.order.total = state.order.total - action.pizza.price;
                }
            }
            return {...state};

        case 'REMOVE_SAUCE_FROM_ORDER':
            for( let i = 0; i < state.order.sauce.length; i++) {
                if(state.order.sauce[i].name == action.sauce.name) {
                    state.order.sauce.splice(i, 1);
                    state.order.total = state.order.total - action.sauce.price;
                }
            }
            return {...state};

        case 'MAKE_ORDER':
            if(state.order.sauce.length == 0) {
                state.order.sauce = null;
            }

            fetch('http://localhost:3333/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state.order)
            })
            .then(response => {
                return response.json();
            })
            .then(resp_message => {
                action.dispatch(successfulOrder());
            })

            state.order.sauce = [];
            state.order.pizza = [];
            state.order.total = 0;
            return {...state};

        case 'SUCCESSFUL_ORDER':
            return {...state};

        default:
            console.log("no action", action)
            return state;
     }
}