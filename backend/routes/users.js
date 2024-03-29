const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const service = require('../services/recipeService');

let users = [
  {
    id: '1', RecipeTitle: 'scrambled eggs with tomatoes',
    Ingredients: '2eggs, 1 tomato, salt',
    Instructions: 'fry the tomatoes and then add eggs',
    EstimatedCookingTime: 15,
    complete: false
  },
  {
    id: '2', RecipeTitle: 'Garlic Asparagus with Lime',
    Ingredients: 'Asparagus, Garlic, Lime',
    Instructions: 'Stir in garlic and shallots, and cook for 1 to 2 minutes. Stir in asparagus spears; cook until tender',
    EstimatedCookingTime: 10,
    complete: false
  }
];

/**
 * Get all recipes
 * 
 * @verb GET
 * @endpoint /recipes
 * 
 * Responses:
 * Success:
 * @status 200 OK
 * @data recipes[]
 * 
 * Error:
 * @status 500 SERVER ERROR
 * @error message
 */
router.get('/', function (req, res) {
  service.getRecipes()
    .then((recipes) => {
      return res.status(200).send(recipes);
    })
    .catch((error) => {
      return res.status(500).send({ error: error.message });
    })
});

// router.get('/', function (req, res, next) {
//   return res.send(users);
// });

router.post('/', function (req, res, next) {
  if (!req.body.title || !req.body.ingredient ||
    !req.body.instruction || !req.body.cookingTime) {
    return res.status(400).send({ message: 'recipe must have a title/ingredient/instruction!' })
  }
  const user = {
    id: uuid(), RecipeTitle: req.body.title,
    Ingredients: req.body.ingredient, Instructions: req.body.instruction,
    EstimatedCookingTime: req.body.cookingTime, complete: req.body.complete
  };
  // users.push(user);

  service.addRecipe(user)
    .then((recipeAdded) => {
      return res.status(200).send(recipeAdded);
    })
    .catch((error) => {
      if (error.type === 'validation') {
        return res.status(400).send({ error: error.message });
      } else {
        return res.status(500).send({ error: error.message });
      }
    })

  // return res.send(user);
});

// router.post('/', function (req, res, next) {
//   if (!req.body.title || !req.body.ingredient ||
//     !req.body.instruction || !req.body.cookingTime) {
//     return res.status(400).send({ message: 'recipe must have a title/ingredient/instruction!' })
//   }
//   const user = {
//     id: uuid(), RecipeTitle: req.body.title,
//     Ingredients: req.body.ingredient, Instructions: req.body.instruction,
//     EstimatedCookingTime: req.body.cookingTime, complete: req.body.complete
//   };
//   users.push(user);
//   return res.send(user);
// });

router.delete('/:id', function (req, res) {
  const id = JSON.stringify(req.body.id).replaceAll("\"", "")
  service.deleteRecipe(id)
    .then(service.getRecipes()
    .then((recipes) => {
      return res.status(200).send(recipes);
    }))
    
    .catch((error) => {
      if (error.type === 'validation') {
        return res.status(400).send({ error: error.message });
      } else {
        return res.status(500).send({ error: error.message });
      }
    })
});

// router.delete('/:id', function (req, res) {
//   const id = JSON.stringify(req.body.id).replaceAll("\"", "")
//   const deleted = users.find(user => user.id === id);
//   if (deleted) {
//     users = users.filter(user => user.id !== id);
//     return res.send(deleted);
//   }
//   else {
//     return res.status(404).json({ message: 'recipe you are looking for does not exist' });
//   }
// });

router.delete('/', function (req, res, next) {
  users = [];
  return res.send(users);
});

router.patch('/:id', function (req, res) {
  if (!req.body.title || !req.body.ingredient ||
    !req.body.instruction || !req.body.cookingTime) {
    return res.status(400).send({ message: 'recipe must have a title/ingredient/instruction!' })
  }
  const newRecipe = {
    id: req.body.id, RecipeTitle: req.body.title,
    Ingredients: req.body.ingredient,
    Instructions: req.body.instruction,
    EstimatedCookingTime: req.body.cookingTime,
    complete: false
  }
  service.updateRecipe(newRecipe)
    .then((recipeUpdated) => {
      return res.status(200).send(recipeUpdated);
    })
    .catch((error) => {
      if (error.type === 'validation') {
        return res.status(400).send({ error: error.message });
      } else {
        return res.status(500).send({ error: error.message });
      }
    })
  // const id = JSON.stringify(req.body.id).replaceAll("\"", "")
  // const edited = users.find(user => user.id === id);
  // if (edited) {
  //   const newRecipe = {
  //     id: id, RecipeTitle: req.body.title,
  //     Ingredients: req.body.ingredient,
  //     Instructions: req.body.instruction,
  //     EstimatedCookingTime: req.body.cookingTime,
  //     complete: false
  //   }
  //   users.forEach((element, index) => {
  //     if (element.id === id) {
  //       users[index] = newRecipe;
  //     }
  //   });
  //   return res.send(users);
  // }
  // else {
  //   return res.status(404).json({ message: 'recipe you are looking for does not exist' });
  // }
});

// router.patch('/:id', function (req, res) {
//   if (!req.body.title || !req.body.ingredient ||
//     !req.body.instruction || !req.body.cookingTime) {
//     return res.status(400).send({ message: 'recipe must have a title/ingredient/instruction!' })
//   }
//   const id = JSON.stringify(req.body.id).replaceAll("\"", "")
//   const edited = users.find(user => user.id === id);
//   if (edited) {
//     const newRecipe = {
//       id: id, RecipeTitle: req.body.title,
//       Ingredients: req.body.ingredient,
//       Instructions: req.body.instruction,
//       EstimatedCookingTime: req.body.cookingTime,
//       complete: false
//     }
//     users.forEach((element, index) => {
//       if (element.id === id) {
//         users[index] = newRecipe;
//       }
//     });
//     return res.send(users);
//   }
//   else {
//     return res.status(404).json({ message: 'recipe you are looking for does not exist' });
//   }
// });

module.exports = router;
