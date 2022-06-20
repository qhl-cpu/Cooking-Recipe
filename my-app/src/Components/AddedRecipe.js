import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import "../css/addedRecipe.css";
import RecipePopUp from './RecipePopUp';
import EditRecipe from './EditRecipe';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsAsync,getInitialReviewsAsync } from '../reducers/users/thunks';


export default function AddedRecipe({ recipe }) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editRecipe, seteditRecipe] = useState(false);
  if (recipe.title === '') {
    return;
  }

  function fetchReviews(id) {
    //dispatch(getInitialReviewsAsync());
    dispatch(getReviewsAsync({id}));
    setButtonPopup(true)
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
            onClick={() => fetchReviews(recipe.id)}>Open Recipe</button>

          <button type="button" id="editRecipeButton"
            onClick={() => seteditRecipe(true)}>Edit Recipe</button>
            <RecipePopUp trigger={buttonPopup} setTrigger={setButtonPopup}
              id={recipe.id} instruction={recipe.Instructions} reviews = {reviews}>
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