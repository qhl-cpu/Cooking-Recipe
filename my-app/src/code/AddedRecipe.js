import React from 'react'
import RecipeCard from './RecipeCard';

export default function AddedRecipe({title,ingredient,instruction,cookTime}) {
    return (
      <div className="addedRecipeCardDiv">
            <ul id = "RecipeCards">
            <li id="addedRecipeCard">
            {"RecipeTitle: " + title} <br />
            {"Ingredients: " + ingredient} <br />
            {"Instructions: " + instruction} <br />
            {"EstimatedCookingTime(mins): " + cookTime} <br />
            </li>
            </ul>
          </div>
      // cards.map(card=> {
      //   return <RecipeCard key={card.id} card = {card} />
      // })
    )
}