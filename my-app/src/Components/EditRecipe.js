import React, { useState } from 'react'
import '../css/recipePopUp.css'
import { useSelector, useDispatch } from 'react-redux';
import { editUserAsync,getUsersAsync} from '../reducers/users/thunks';





export default function EditRecipe(props) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(props.recipe.RecipeTitle)
  const [ingredient, setIngredient] = useState(props.recipe.Ingredients)
  const [instruction, setInstruction] = useState(props.recipe.Instructions)
  const [cookingTime, setCookingTime] = useState(props.recipe.EstimatedCookingTime)

  function handleSubmit(e) {
    e.preventDefault();
    const id = props.recipe._id;
    dispatch(editUserAsync({ id, title, ingredient, instruction, cookingTime }))
    .then(()=>{dispatch(getUsersAsync())});
    props.setTrigger(false)
  }

  return (props.trigger) ? (
    <div className='popUp'>
      <div className='popUp-Inner'>
        <form id="recipeForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="RecipeTitle">Recipe title</label>
            <textarea onChange={(e) => setTitle(e.target.value)}
              type="text" name="Recipe Title" id="RecipeTitle"
              defaultValue={props.recipe.RecipeTitle}
              placeholder="title goes here" required />
          </div>
          <br />

          <div>
            <label htmlFor="Ingredients">Ingredients</label>
            <textarea onChange={e => setIngredient(e.target.value)}
              type="text" name="Ingredients" id="Ingredients"
              defaultValue={props.recipe.Ingredients}
              placeholder="Ingredients goes here" required />
          </div>
          <br />

          <div>
            <label htmlFor="Instructions">Instructions</label>
            <textarea onChange={e => setInstruction(e.target.value)}
              type="text" name="Instructions" id="Instructions"
              defaultValue={props.recipe.Instructions}
              placeholder="Instructions goes here" required />
          </div>
          <br />
          <div>
            <label htmlFor="CookingTime">Estimated cooking time(mins)</label>
            <input onChange={e => setCookingTime(e.target.value)}
              type="number" name="Estimated cooking time(mins)" id="CookingTime" min="1" max="1440"
              defaultValue={props.recipe.EstimatedCookingTime} step={1} required />
          </div>
          <div>
            <button type="submit" id="addRecipe" >Submit</button>
          </div>
        </form>
        <button className='close-btn'
          onClick={() => props.setTrigger(false)}>close</button>
        {/* {props.children} */}
      </div>
    </div>
  ) : "";
}
