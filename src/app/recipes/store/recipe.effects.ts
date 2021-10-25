import {Actions, Effect, ofType} from "@ngrx/effects";
import * as RecipesActions from "./recipe.actions";
import {map, switchMap} from "rxjs/operators";
import {Recipe} from "../recipe.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-e95cc-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }), map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  )

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
