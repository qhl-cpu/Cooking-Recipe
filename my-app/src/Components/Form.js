import "../css/form.css"
import React,{useState,useRef} from "react";
import AddedRecipe from './AddedRecipe'
import CurrentRecipe from "./CurrentRecipe";
import {useSelector, useDispatch} from 'react-redux';
import { increment } from '../actions/index.js'


export default function Form() {
    const count = useSelector(state => state.buttonCount);
    const dispatch = useDispatch();

    const recipeTitleRef = useRef();
    const ingredientsRef = useRef();
    const instructionsRef = useRef();
    const cookingTimeRef = useRef();

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
          <h1>I want {count} scoops of ice cream!</h1>
          <button onClick={() => dispatch(increment(1))}>Submit</button>
          <button type="reset" id="resetRecipe">Clear All</button>
          </div>
        </form>
      </div>
  );
}
