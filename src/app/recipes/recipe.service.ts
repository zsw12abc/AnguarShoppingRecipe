import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test recipe',
      'This is a simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fires', 20)
      ]),
    new Recipe('A Test recipe2',
      'This is a simple test2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();// only return a copy of recipes.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.shoppingListService.addIngredients(ingredients);
  }
}
