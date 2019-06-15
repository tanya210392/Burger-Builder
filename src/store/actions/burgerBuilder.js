import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = ingName => {
    return {
      type: actionTypes.ADD_INGREDIENT,
      payload: ingName
    };
};

export const deleteIngredient = ingName => {
    return {
        type: actionTypes.DELETE_INGREDIENT,
        payload: ingName
    };
};

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        payload: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-841fc.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
