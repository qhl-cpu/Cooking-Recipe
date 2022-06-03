import PreLoadedCards from "./PreLoadedCards.js"
import AddedRecipe from "./AddedRecipe.js"
// import "../css/CurrentRecipe.css"

export default function CurrentRecipe() {
    return (
      <div className="App">
        {PreLoadedCards()}
        {AddedRecipe()}
      </div>
    );
}