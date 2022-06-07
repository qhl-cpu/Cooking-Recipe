import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import "../css/addedRecipe.css"
import RecipePopUp from './RecipePopUp';

export default function AddedRecipe({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  if (recipe.title === '') {
    return;
  }


  return (
    <div className="addedRecipeCardDiv">
      <ul id="RecipeCards">
        <li id="addedRecipeCard">
          {"RecipeTitle: " + recipe.title} <br />
          {"Ingredients: " + recipe.ingredient} <br />
          {"Instructions: " + recipe.instruction} <br />
          {"EstimatedCookingTime(mins): " + recipe.cookingTime} <br />
          <button type="button" id="openRecipeButton"
            onClick={() => setButtonPopup(true)}>Open Recipe</button>
            
          <div>
            <RecipePopUp trigger={buttonPopup} setTrigger={setButtonPopup}
              title={recipe.title} instruction={recipe.instruction}>
              <h3>Instructions: </h3> <p>{recipe.instruction}</p>
            </RecipePopUp>
          </div>
        </li>
      </ul>
    </div>
  )
}