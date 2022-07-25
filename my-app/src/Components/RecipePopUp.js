import React from 'react'
import '../css/recipePopUp.css'

export default function RecipePopUp(props) {
  return (props.trigger) ? (
    <div className='popUp'>
      <div className='popUp-Inner'>
        <h3>Instructions: </h3> {props.instruction}
        <button className='close-btn'
          onClick={() => props.setTrigger(false)}>close</button>
        {/* {props.children} */}
      </div>
    </div>
  ) : "";
}
