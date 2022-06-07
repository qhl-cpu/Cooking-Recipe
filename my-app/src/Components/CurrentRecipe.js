import PreLoadedCards from "./PreLoadedCards.js";
import AddedRecipe from "./AddedRecipe.js";
import React, { useState } from 'react';
// import "../css/CurrentRecipe.css"

export default function CurrentRecipe({ recipes }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  console.log(recipes)
  return (
    <div className="App">
       <div>
        <button type="button" id="clearRecipeCards">Clear All Recipes</button>
      </div>
      {/* <PreLoadedCards /> */}
      {/* {recipes?.map(recipe => {
        return <AddedRecipe key={recipe.id} recipe={recipe} />
      })
      } */}
      <AddedRecipe key={recipes.id} recipe={recipes} />
      {/* <AddedRecipe recipe={recipe}/> */}

      

    </div>
  );
}