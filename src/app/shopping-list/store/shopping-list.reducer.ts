import {Ingredient} from "../../shared/ingredient.model";
import {Action} from "rxjs/internal/scheduler/Action";
import * as ShoppingListActions from './shopping-list.actions'

const initialState =
  {
    ingredients: [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
    ]
  };


export function shoppingListReducer(
  state = initialState,
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

    default:
      return state;
  }
}
