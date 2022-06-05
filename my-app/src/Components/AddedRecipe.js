import React from 'react'
import RecipeCard from './RecipeCard';
import "../css/addedRecipe.css"

export default function AddedRecipe({recipe}) {
    if (recipe.title === '') {
      return;
    }
    return (
      <div className="addedRecipeCardDiv">
            <ul id = "RecipeCards">
            <li id="addedRecipeCard">
            {"RecipeTitle: " + recipe.title} <br />
            {"Ingredients: " + recipe.ingredient} <br />
            {"Instructions: " + recipe.instruction} <br />
            {"EstimatedCookingTime(mins): " + recipe.cookingTime} <br />
            </li>
            </ul>
          </div>
      // cards.map(card=> {
      //   return <RecipeCard key={card.id} card = {card} />
      // })
    )
}