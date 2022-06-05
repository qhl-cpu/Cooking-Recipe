import React from 'react'

export default function RecipeCard({recipe}) {
  return (
    <div>
        <span>{recipe.title}</span>
        <button>Toggle</button>
        <button>Delete</button>
    </div>
  )
}
