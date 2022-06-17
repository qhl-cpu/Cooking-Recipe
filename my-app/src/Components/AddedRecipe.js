import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import "../css/addedRecipe.css"
import RecipePopUp from './RecipePopUp';

export default function AddedRecipe({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  console.log(JSON.stringify(recipe))
  if (recipe.title === '') {
    return;
  }


  return (
    <div className="addedRecipeCardDiv">
      <ul id="RecipeCards">
        <li id="addedRecipeCard">
          {"RecipeTitle: " + recipe.RecipeTitle} <br />
          {"Ingredients: " + recipe.Ingredients} <br />
          {"Instructions: " + recipe.Instructions} <br />
          {"EstimatedCookingTime(mins): " + recipe.EstimatedCookingTime} <br />
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