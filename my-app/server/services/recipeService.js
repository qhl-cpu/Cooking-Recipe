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
		return Recipe.find({});
	} catch (error) {
		throw { type: 'DB', message: error };
	}
};


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
}