import {Ingredient} from "../../shared/ingredient.model";
import {Action} from "rxjs/internal/scheduler/Action";
import {ADD_INGREDIENT} from './shopping-list.actions'

const initialState =
  {
    ingredients: [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
    ]
  };


export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state, //copy the old states
        ingredients: [...state.ingredients, action]
      }

  }
}
