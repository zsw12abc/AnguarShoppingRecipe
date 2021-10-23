import {Ingredient} from "../../shared/ingredient.model";
import {Action} from "rxjs/internal/scheduler/Action";
import * as ShoppingListActions from './shopping-list.actions'

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}


const initialState: State =
  {
    ingredients: [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
  };

export function shoppingListReducer(
  state: State = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, //copy the old states
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index]
      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      }
      const updateIngredients = [...state.ingredients];
      updateIngredients[action.payload.index] = updateIngredient

      return {
        ...state,
        ingredients: updateIngredients
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient, index) => {
          return index != action.payload
        })
      }
    default:
      return state;
  }
}