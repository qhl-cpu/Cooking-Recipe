import '../css/recipePopUp.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addReviewAsync,updateReviewAsync } from '../reducers/users/thunks';
const { v4: uuid } = require('uuid');


export default function RecipePopUp(props) {
  const [addReview, setaddReview] = useState(false);
  const [review, setReview] = useState('')
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviews.reviews);

  function handleSubmit() {
    const id = props.id;
    const idExist = reviews.find(review => review.id+'' === id);
    if (idExist) {
      dispatch(updateReviewAsync({ id, review }))
    } else {
      dispatch(addReviewAsync({ id, review }));
    }
  }
  function closePopUp() {
    props.setTrigger(false);
    if (addReview) {
      setaddReview(!addReview);
    }
  }

  return (props.trigger) ? (
    <div className='popUp'>
      <div className='popUp-Inner'>
        <h3>Instructions: </h3> {props.instruction}
        <h3>Reviews: </h3>
        <div id="reviews-div">
          {props.reviews.map((uniqueIdReview) => {
            if (uniqueIdReview.id + '' === props.id) {
              return (
                <div key={uuid()} id="addedRecipe-div">
                  {uniqueIdReview.review.map((reviewArray) => {
                    return <p key={uuid()}>{reviewArray}</p>
                  })}
                </div>
              )
            } else {
              return (null)
            }
          })}
          <div>
            <button className={(addReview ? "disableAddReviewButton" : "showAddReviewButton")}
              onClick={() => setaddReview(!addReview)}>Add Review</button>
            <button className={(addReview ? "showCloseReviewButton" : "disableCloseReviewButton")}
              onClick={() => setaddReview(!addReview)}>Close Editing</button>
            <form id="reviewForm" onSubmit={handleSubmit}>
              <div className={(addReview ? "showReview" : "disableReview")}>
                <label htmlFor="reviews">Write your reviews here</label>
                <textarea className='reviewTextArea' onChange={e => setReview(e.target.value)}
                  type="text" name="reviews" id="reviews" placeholder="title goes here" required />
              </div>
            </form>
            <button className={(addReview ? "showSubmitReviewButton" : "disableSubmitReviewButton")}
              onClick={() => handleSubmit()}>Submit Review</button>

          </div>
        </div>

        <button className='close-btn'
          onClick={() => closePopUp()}>close</button>
      </div>
    </div>
  ) : "";
}
