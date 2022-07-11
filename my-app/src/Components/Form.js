import "../css/form.css"
import React, { useState, useEffect } from "react";
import AddedRecipe from './AddedRecipe';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUserAsync, getUsersAsync, deleteUserAsync,
  getReviewsAsync, deleteAllUserAsync, getInitialReviewsAsync
} from '../reducers/users/thunks';

function newRecipe(title, ingredient, instruction, cookingTime) {
  return {
    id: Date.now(), title: title, ingredient: ingredient,
    instruction: instruction, cookingTime: cookingTime, complete: false
  }
}
export default function Form() {
  const dispatch = useDispatch()

  const [id, setID] = useState('')
  const [title, setTitle] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [instruction, setInstruction] = useState('')
  const [cookingTime, setCookingTime] = useState(1)

  const [list, setList] = React.useState([]);

  // const LOCAL_STORAGE_KEY = "recipeWeb.recipes"

  const users = useSelector(state => state.users.list);
  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getInitialReviewsAsync())
  }, []);

  // useEffect(() => {
  //   dispatch(deleteUserAsync());
  //   dispatch(deleteAllUserAsync());
  // }, [users]);

  // useEffect(() => {
  //   const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedList)
  //     setList(storedList)
  // }, []);

  // useEffect(() => {
  //   if (list.length !== 0)
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  //   if (list.length === 0)
  //     localStorage.clear();
  // }, [list]);


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUserAsync({ title, ingredient, instruction, cookingTime }));
  }

  function clearAllRecipes() {
    dispatch(deleteAllUserAsync());
    //localStorage.clear();
  }

  function deleteRecipe(recipe) {
    const id = recipe.id;
    // dispatch(getReviewsAsync({id}));
    dispatch(deleteUserAsync({ id }));
    // .then(dispatch(getUsersAsync()));
    // window.location.reload(false);
  }

  return (
    <div id="container-div">
      <div id="form-container">
        <img src={require('../ArtResources/cooking-1.gif')} alt="this is a cooking gif" className="cookingGif" width="276" height="232" />
        <form id="recipeForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="RecipeTitle">Recipe title</label>
            <input onChange={(e) => setTitle(e.target.value)}
              type="text" name="Recipe Title" id="RecipeTitle" placeholder="title goes here" required />
          </div>

          <div>
            <label htmlFor="Ingredients">Ingredients</label>
            <input onChange={e => setIngredient(e.target.value)}
              type="text" name="Ingredients" id="Ingredients" placeholder="Ingredients goes here" required />
          </div>

          <div>
            <label htmlFor="Instructions">Instructions</label>
            <input onChange={e => setInstruction(e.target.value)}
              type="text" name="Instructions" id="Instructions" placeholder="Instructions goes here" required />
          </div>

          <div>
            <label htmlFor="CookingTime">Estimated cooking time(mins)</label>
            <input onChange={e => setCookingTime(e.target.value)}
              type="number" name="Estimated cooking time(mins)" id="CookingTime" min="1" max="1440" value={cookingTime} step={1} required />
          </div>
          <div>
            <button type="submit" id="addRecipe" >Submit</button>
            <button type="reset" id="resetRecipe">Clear All</button>
          </div>
        </form>
      </div>
      <div id="clearAllRecipes-div">
        <button type="button" id="clearAllRecipes"
          onClick={clearAllRecipes}>Clear All Recipes</button>
      </div>

      <div id="addedRecipe">
        {users.map((user) => {
          return (
            <div key={user._id} id="addedRecipe-div">
              <AddedRecipe key={user._id} recipe={user} />
              <div id="deleteRecipeButton-div">
                <button type="button" id="deleteRecipeButton"
                  onClick={() => deleteRecipe(user)}>Delete Recipe</button>
              </div>
              <br />
            </div>);

        })}
      </div>
      {/* <div id="addedRecipe">
        {reviews.map((review) => {
          return (
            <div key={review.id} id="addedRecipe-div">
            <p>{review.review}</p>
            </div>
          )
          })}
      </div> */}
    </div>
  );
}
