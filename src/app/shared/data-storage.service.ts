import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";
import {map} from "rxjs/operators";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng-course-recipe-book-e95cc-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng-course-recipe-book-e95cc-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })
      }))
      .subscribe(recipes => {
        console.log('recipes', recipes)
        this.recipeService.setRecipes(recipes);
      });
  }
}
