import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIng = {[action.payload]: state.ingredients[action.payload] + 1};
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedState = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
    };
    return updateObject(state, updatedState);
};

const deleteIngredient = (state, action) => {
    const updatedIngredient = {[action.payload]: state.ingredients[action.payload] - 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedSt = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
    };
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.payload.salad,
            bacon: action.payload.bacon,
            cheese: action.payload.cheese,
            meat: action.payload.meat,
        },
        error: false,
        totalPrice: 4
    });
};

const fetchIngredientsFail = state => {
    return updateObject(state, {error: true});
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.DELETE_INGREDIENT: return deleteIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFail(state);
        default: return state;
    }
};

export default burgerBuilder;
