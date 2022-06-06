import React from 'react'
import '../css/recipePopUp.css'

export default function RecipePopUp(props) {
  return (props.trigger)?(
    <div className='popUp'>
        <div className='popUp-Inner'>
            <button className='close-btn'
            onClick={()=>props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}
