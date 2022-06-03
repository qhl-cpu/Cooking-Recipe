import PreLoadedCards from "./PreLoadedCards.js"
import AddedRecipe from "./AddedRecipe.js"

export default function CurrentRecipe() {
    return (
      <div className="App">
        {PreLoadedCards()}
        {AddedRecipe()}
      </div>
    );
}