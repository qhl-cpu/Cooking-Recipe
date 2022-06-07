import PreLoaded from '../json/preloaded.json'
import AddedRecipe from "../Components/AddedRecipe.js";
const initialState = [{
	RecipeTitle: "scrambled eggs with tomatoes",
    Ingredients: "2eggs, 1 tomato, salt",
    Instructions: "fry the tomatoes and then add eggs",
    EstimatedCookingTime: 15
	}];
console.log(initialState);
const buttonCount = (state=initialState, action) => {
	switch(action.type) {
        case 'INCREMENT_COUNTER':
			console.log("state"+state);
			console.log(JSON.stringify(state))
			console.log(action.payload);
			return <AddedRecipe key={action.payload.id} recipe={action.payload} />
			
			// return Object.assign({}, state, {
			// 	card: state.card?.concat({
			// 		RecipeTitle: action.title,
			// 		Ingredients: action.ingredient,
			// 		Instructions: action.instruction,
			// 		EstimatedCookingTime: action.cookingTime
			// 	})
			//   })
            //return [...state.card,action.payload];
		default:
			return <></>;
	}
};

export default buttonCount;