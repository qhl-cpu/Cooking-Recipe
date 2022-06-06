import PreLoadedCards from "./PreLoadedCards.js";
import AddedRecipe from "./AddedRecipe.js";
import React, {useState} from 'react';
// import "../css/CurrentRecipe.css"

export default function CurrentRecipe({recipes}) {
  const [cards,setCards] = useState([{id:1,name: 'card1'}]) 
    return (
      <div className="App">
        {/* <PreLoadedCards /> */}
        {recipes?.map(recipe => {
          return <AddedRecipe key={recipe.id} recipe={recipe}/>
        })
        }
        {/* <AddedRecipe recipe={recipe}/> */}
        <div>
          <button type = "button" id = "clearRecipeCards">Clear All</button>
        </div>
      </div>
    );
}