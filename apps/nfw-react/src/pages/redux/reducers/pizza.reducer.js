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
        },
        orderStatus: ""
    }, action) {
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
            state.orderStatus = "";
            state.order.pizza.push(action.pizza);
            state.order.pizza.sort((a, b) => a.name > b.name);
            state.order.total = state.order.total + action.pizza.price;
            return {...state};
        
        case 'ADD_SAUCE_TO_ORDER':
            state.orderStatus = "";
            action.sauce.count = 1;
            state.order.sauce.push(action.sauce);
            state.order.total = state.order.total + action.sauce.price;
            return {...state};

        case 'REMOVE_PIZZA_FROM_ORDER':
            state.order.total = state.order.total - state.order.pizza[action.index].price;
            state.order.pizza.splice(action.index, 1);
            return {...state};

        case 'REMOVE_SAUCE_FROM_ORDER':
            state.order.total = state.order.total - state.order.sauce[action.index].price;
            state.order.sauce.splice(action.index, 1);
            return {...state};

        case 'MAKE_ORDER':
            state.orderStatus = "In progress";
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
            .then( () => {
                action.dispatch(successfulOrder());
            })

            state.order.sauce = [];
            state.order.pizza = [];
            state.order.total = 0;
            return {...state};

        case 'SUCCESSFUL_ORDER':
            state.orderStatus = "Success";
            return {...state};

        default:
            console.log("no action", action)
            return state;
     }
}