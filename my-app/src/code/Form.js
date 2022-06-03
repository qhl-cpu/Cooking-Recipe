import "../css/form.css"
export default function Button() {

  return (
    <div id="container-div">
        <img src={require('../ArtResources/cooking-1.gif')} alt="this is a cooking gif" className = "cookingGif" width="276" height="232"/>
        <form id = "recipeForm">
          <div>
            <label htmlFor = "RecipeTitle">Recipe title</label>
            <input type="text" name = "Recipe Title" id = "RecipeTitle" placeholder="title goes here" required/>
          </div>

          <div>
          <label htmlFor = "Ingredients">Ingredients</label>
          <input type="text" name = "Ingredients" id = "Ingredients" placeholder="Ingredients goes here" required/>
          </div>

          <div>
          <label htmlFor = "Instructions">Instructions</label>
          <input type="text" name = "Instructions" id = "Instructions" placeholder="Instructions goes here"/>
          </div>

          <div>
          <label htmlFor = "CookingTime">Estimated cooking time(mins)</label>
          <input type="number" name = "Estimated cooking time(mins)" id = "CookingTime"  min="1" max ="1440"/>
          </div>
          <div>
          <button type="button" id="addRecipe">Submit</button>
          <button type = "reset" id="resetRecipe">Clear All</button>
          </div>
        </form>
      </div>
  );
}
