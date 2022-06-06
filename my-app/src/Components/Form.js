import "../css/form.css"
import React,{useState,useRef,useReducer} from "react";
import AddedRecipe from './AddedRecipe'
import CurrentRecipe from "./CurrentRecipe";
import PreLoaded from '../json/preloaded.json'
import {useSelector, useDispatch} from 'react-redux';
import { increment } from '../actions/index.js'
import RecipeCard from "./RecipeCard";

const ACTIONS = {
  ADD_RECIPE: 'ADD_RECIPE',
  DELETE_RECIPE: 'DELETE_RECIPE'
}

function reducer(recipes,action) {
  switch(action.type) {
    case ACTIONS.ADD_RECIPE:
      return [...recipes,newRecipe(action.payload.title, action.payload.ingredient,
        action.payload.instruction, action.payload.cookingTime)]
    case ACTIONS.DELETE_RECIPE:
      return 
    default: 
      return
  }
}

function newRecipe(title,ingredient,instruction,cookingTime) {
  return {id: Date.now(),title: title, ingredient: ingredient,
    instruction: instruction, cookingTime: cookingTime, complete:false}
}

export default function Form() {
  const initialState = [{id: Date.now(),title:PreLoaded[0].RecipeTitle,ingredient:PreLoaded[0].Ingredients,
    instruction:PreLoaded[0].Instructions,cookingTime:PreLoaded[0].EstimatedCookingTime}]

    const [recipes,dispatch] = useReducer(reducer,initialState);
    // console.log(recipes)
    const [title,setTitle] = useState('')
    const [ingredient,setIngredient] = useState('')
    const [instruction,setInstruction] = useState('')
    const [cookingTime,setCookingTime] = useState(1)


    function handleSubmit(e) {
      e.preventDefault()
      dispatch({type: ACTIONS.ADD_RECIPE, payload: {title: title,ingredient:ingredient,
        instruction:instruction,cookingTime:cookingTime}})
    }

    console.log(recipes)

  return (
    <div id="container-div">
      <div id="form-container">
        <img src={require('../ArtResources/cooking-1.gif')} alt="this is a cooking gif" className = "cookingGif" width="276" height="232"/>
        <form id = "recipeForm" onSubmit = {handleSubmit}>
          <div>
            <label htmlFor = "RecipeTitle">Recipe title</label>
            <input onChange={e=>setTitle(e.target.value)}
            type="text" name = "Recipe Title" id = "RecipeTitle" placeholder="title goes here" required/>
          </div>

          <div>
          <label htmlFor = "Ingredients">Ingredients</label>
          <input onChange={e=>setIngredient(e.target.value)}
          type="text" name = "Ingredients" id = "Ingredients" placeholder="Ingredients goes here" required/>
          </div>

          <div>
          <label htmlFor = "Instructions">Instructions</label>
          <input onChange={e=>setInstruction(e.target.value)}
          type="text" name = "Instructions" id = "Instructions" placeholder="Instructions goes here" required/>
          </div>

          <div>
          <label htmlFor = "CookingTime">Estimated cooking time(mins)</label>
          <input onChange={e=>setCookingTime(e.target.value)}
          type="number" name = "Estimated cooking time(mins)" id = "CookingTime" min="1" max ="1440" value={cookingTime} step={1} required/>
          </div>
          <div>
          <button type="submit" id="addRecipe" >Submit</button>
          <button type="reset" id="resetRecipe">Clear All</button>
          </div>
        </form>
      </div>
      <div id = "recipe-container">
        <CurrentRecipe recipes={recipes}/>
       </div>

        {/* {recipes.map(recipe => {
          return <RecipeCard key={recipe.id} recipe={recipe}/>
        })
        } */}
      </div>
  );
}
