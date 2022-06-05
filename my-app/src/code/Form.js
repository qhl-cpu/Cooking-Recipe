import "../css/form.css"
import React,{useState,useRef} from "react";
import AddedRecipe from './AddedRecipe'
import CurrentRecipe from "./CurrentRecipe";

export default function Form() {
  const [recipeCards,setRecipeCards] = useState([]);
  const recipeTitleRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();
  const cookingTimeRef = useRef();


  function handleAddRecipe(event) {
    const recipeTitle = recipeTitleRef.current.value;
    const recipeIngredients = ingredientsRef.current.value;
    const recipeInstructions = instructionsRef.current.value;
    const recipeCookingTime = cookingTimeRef.current.value;
    if(recipeTitle === '' || recipeIngredients==='' || recipeInstructions==='') return;

    // setRecipeCards(prevRecipeCards => {
    //   return [...prevRecipeCards, {id: 1, recipeTitle:recipeTitle, recipeIngredients: recipeIngredients,
    //   recipeInstructions: recipeIngredients, recipeCookingTime: recipeCookingTime}]
    // })
    console.log(recipeTitle);
    AddedRecipe(recipeTitle,recipeIngredients,recipeInstructions,recipeCookingTime);
    <AddedRecipe title = {recipeTitle} ingredient={recipeIngredients} instruction={recipeInstructions}
    cookTime={recipeCookingTime}/>
    // recipeTitleRef.current.value = null;
    // ingredientsRef.current.value = null;
    // instructionsRef.current.value = null;
    // cookingTimeRef.current.value = 1;
  }

  return (
    <div id="container-div">
        <img src={require('../ArtResources/cooking-1.gif')} alt="this is a cooking gif" className = "cookingGif" width="276" height="232"/>
        <form id = "recipeForm">
          <div>
            <label htmlFor = "RecipeTitle">Recipe title</label>
            <input ref={recipeTitleRef} type="text" name = "Recipe Title" id = "RecipeTitle" placeholder="title goes here" required/>
          </div>

          <div>
          <label htmlFor = "Ingredients">Ingredients</label>
          <input ref={ingredientsRef} type="text" name = "Ingredients" id = "Ingredients" placeholder="Ingredients goes here" required/>
          </div>

          <div>
          <label htmlFor = "Instructions">Instructions</label>
          <input ref={instructionsRef} type="text" name = "Instructions" id = "Instructions" placeholder="Instructions goes here"/>
          </div>

          <div>
          <label htmlFor = "CookingTime">Estimated cooking time(mins)</label>
          <input ref={cookingTimeRef} type="number" name = "Estimated cooking time(mins)" id = "CookingTime"  min="1" max ="1440"/>
          </div>
          <div>
          <button type="button" id="addRecipe" onClick={handleAddRecipe}>Submit</button>
          <button type="reset" id="resetRecipe">Clear All</button>
          </div>
        </form>
      </div>
  );
}
