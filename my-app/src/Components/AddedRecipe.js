import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import "../css/addedRecipe.css";
import RecipePopUp from './RecipePopUp';
import EditRecipe from './EditRecipe';

export default function AddedRecipe({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editRecipe, seteditRecipe] = useState(false);
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
          <div id="openEditButton-div">
          <button type="button" id="openRecipeButton"
            onClick={() => setButtonPopup(true)}>Open Recipe</button>

          <button type="button" id="editRecipeButton"
            onClick={() => seteditRecipe(true)}>Edit Recipe</button>
            <RecipePopUp trigger={buttonPopup} setTrigger={setButtonPopup}
              title={recipe.RecipeTitle} instruction={recipe.Instructions}>
              <h3>Instructions: </h3> <p>{recipe.Instructions}</p>
            </RecipePopUp>

            <EditRecipe trigger={editRecipe} setTrigger={seteditRecipe}
              recipe={recipe}>
            </EditRecipe>
          </div>
        </li>
      </ul>
    </div>
  )
}