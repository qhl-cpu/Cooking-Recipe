import { useState } from "react";

export default function PreLoadedCards() {

  return (
    <div>
      <ul id = "RecipeCards">
        <li id="PreloadedRecipeCard">
        {/* <script type = "text/javascript">
          fetch("../preloaded.json")
            .then(response => response.json())
            .then(function(data) {
                document.getElementById("PreloadedRecipeCard").innerHTML += 
                "RecipeTitle: " + data.RecipeTitle + "<br />" +
                "Ingredients: "  +  data.Ingredients + "<br />" +
                "Instructions: " +  data.Instructions + "<br />" +
                "EstimatedCookingTime(mins): " + data.EstimatedCookingTime + "<br />";
            })
            .catch(function(err) {
              console.log(err)
            });
        </script> */}
        </li>
        </ul>
      <button type = "button" id = "clearRecipeCards">Clear All</button>
      </div>
  );
}