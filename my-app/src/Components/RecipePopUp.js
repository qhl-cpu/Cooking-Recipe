import '../css/recipePopUp.css'
import React from 'react'


export default function RecipePopUp(props) {

  return (props.trigger) ? (
    <div className='popUp'>
      <div className='popUp-Inner'>
        <h3>Instructions: </h3> {props.instruction}
        <h3>Reviews: </h3>
        <div id="reviews-div">
          {props.reviews.map((review) => {
            if (review.id+'' === props.id) {
              return (
                <div key={review.id} id="addedRecipe-div">
                  <p>{review.review}</p>
                </div>
              )
            } else {
              return (null)
            }
          })}
        </div>
        <button className='close-btn'
          onClick={() => props.setTrigger(false)}>close</button>
      </div>
    </div>
  ) : "";
}
