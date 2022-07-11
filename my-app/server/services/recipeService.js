const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  RecipeTitle: {
    type: String
  },
  Ingredients: {
    type: String
  },
  Instructions: {
    type: String
  },
  EstimatedCookingTime: {
    type: Number, default: 0
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

/**
 * Get all recipes from database
 * 
 * @returns {Array} a list of all recipes stored in BD
 */
const getRecipes = async () => {
  try {
    const recipe = await Recipe.find({});
    return recipe;
  } catch (error) {
    throw { type: 'DB', message: error };
  }
};

/**
 * Add an recipe to the database
 * 
 * @param {object} recipe 
 * 
 * @returns {object} recipe has been added to the db
 * @throws {object}} error - type and messages
 */
const addRecipe = async (recipe) => {
  const newRecipe = new Recipe(recipe);

  // validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
  const validationError = newRecipe.validateSync();
  if (validationError) {
    throw { type: 'validation', message: validationError };
  }
  try {
    await newRecipe.save();
    return newRecipe;
  } catch (error) {
    throw ({ type: 'DB', message: error })
  }
}

/**
 * delete an recipe from the database
 * 
 * @param {object} recipe 
 * 
 * @returns {object} recipe has been deleted from the db
 * @throws {object}} error - type and messages
 */
 const deleteRecipe = async (id) => {
  // const newRecipe = new Recipe(recipe);

  // validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
  // const validationError = newRecipe.validateSync();
  // if (validationError) {
  //   throw { type: 'validation', message: validationError };
  // }
  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    return recipe;
    // await newRecipe.save();
    // return newRecipe;
  } catch (error) {
    throw ({ type: 'DB', message: error })
  }
}

/**
 * update an recipe from the database
 * 
 * @param {object} recipe 
 * 
 * @returns {object} recipe has been updated from the db
 * @throws {object}} error - type and messages
 */
 const updateRecipe = async (newRecipe) => {
  // const newRecipe = new Recipe(recipe);

  // // validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
  // const validationError = newRecipe.validateSync();
  // if (validationError) {
  //   throw { type: 'validation', message: validationError };
  // }
  try {
    await Recipe.findById(newRecipe.id)
    .then(recipe => {
      recipe.RecipeTitle = newRecipe.RecipeTitle;
      recipe.Ingredients = newRecipe.Ingredients;
      recipe.Instructions = newRecipe.Instructions;
      recipe.EstimatedCookingTime = newRecipe.EstimatedCookingTime;
      console.log("hahah")
      recipe.save()
      .then(()=>console.log("success"))
      .catch(err=>console.log("error"))
      
    })
    return Recipe.find({});
    // await newRecipe.save();
    // return newRecipe;
  } catch (error) {
    throw ({ type: 'DB', message: error })
  }
}

const initialRecipe1 = new Recipe(
  {
    id: '1', RecipeTitle: 'scrambled eggs with tomatoes',
    Ingredients: '2eggs, 1 tomato, salt',
    Instructions: 'fry the tomatoes and then add eggs',
    EstimatedCookingTime: 15
  }
);
const initialRecipe2 = new Recipe(
  {
    id: '2', RecipeTitle: 'Garlic Asparagus with Lime',
    Ingredients: 'Asparagus, Garlic, Lime',
    Instructions: 'Stir in garlic and shallots, and cook for 1 to 2 minutes. Stir in asparagus spears; cook until tender',
    EstimatedCookingTime: 10
  }
);
// initialRecipe1.save().then(() => console.log("first entry added"));
// initialRecipe2.save().then(() => console.log("second entry added"));

module.exports = {
  Recipe,
  getRecipes,
  addRecipe,
  deleteRecipe,
  updateRecipe
}