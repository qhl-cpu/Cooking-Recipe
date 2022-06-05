// import { useState, useEffect} from "react";
import PreLoaded from '../json/preloaded.json'
import '../css/preLoadedRecipe.css'

export default function PreLoadedCards() {

  return (
    <div className="PreloadedRecipeCard">
      <span style={{color: "forestgreen",fontSize:50}} id = "CurrentRecipeSpan"> <b>Current Recipe</b> </span>
      
     {
      PreLoaded && PreLoaded.map(preLoaded => {
        return(
          <div className="PreloadedRecipeCardDiv" key = {preLoaded.RecipeTitle}>
            <ul id = "RecipeCards">
            <li id="PreloadedRecipeCard">
            {"RecipeTitle: " + preLoaded.RecipeTitle} <br />
            {"Ingredients: " + preLoaded.Ingredients} <br />
            {"Instructions: " + preLoaded.Instructions} <br />
            {"EstimatedCookingTime(mins): " + preLoaded.EstimatedCookingTime} <br />
            </li>
            </ul>
          </div>
        )
      })
     }
    </div>
  );
}