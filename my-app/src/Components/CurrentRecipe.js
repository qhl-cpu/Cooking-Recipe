import PreLoadedCards from "./PreLoadedCards.js";
import AddedRecipe from "./AddedRecipe.js";
import React, {useState} from 'react';
// import "../css/CurrentRecipe.css"

export default function CurrentRecipe() {
  const [cards,setCards] = useState([{id:1,name: 'card1'}]) 
    return (
      <div className="App">
        <PreLoadedCards />
        <AddedRecipe title = {'recipeTitle'} ingredient={'recipeIngredients'} instruction={'recipeInstructions'}
    cookTime={'1'}/>
        <div>
              <button type = "button" id = "clearRecipeCards">Clear All</button>
            </div>
      </div>
    );
}