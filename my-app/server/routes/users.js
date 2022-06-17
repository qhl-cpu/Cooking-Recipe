const  express = require('express');
const  router = express.Router();
const { v4: uuid } = require('uuid');
let users = [
  { id: uuid(), RecipeTitle: 'scrambled eggs with tomatoes',
  Ingredients: '2eggs, 1 tomato, salt',
  Instructions: 'fry the tomatoes and then add eggs',
  EstimatedCookingTime: 15,
  complete: false},
  { id: uuid(), RecipeTitle: 'Garlic Asparagus with Lime',
  Ingredients: 'Asparagus, Garlic, Lime',
  Instructions: 'Stir in garlic and shallots, and cook for 1 to 2 minutes. Stir in asparagus spears; cook until tender',
  EstimatedCookingTime: 10,
  complete: false}
];

router.get('/', function (req, res, next) {
  return res.send(users);
});

router.post('/', function (req, res, next) {
  if (!req.body.title) {
    return res.status(400).send({ message: 'recipe must have a title!' })
  }
  const user = { id: uuid(), RecipeTitle: req.body.title,
    Ingredients: req.body.ingredient, Instructions: req.body.instruction,
    EstimatedCookingTime: req.body.cookingTime, complete: req.body.complete};
  users.push(user);
  return res.send(user);
});

router.delete('/:id', function (req, res) {
  // const { id } = req.params;
  const id = JSON.stringify(req.body.id).replaceAll("\"", "")
  console.log(JSON.stringify(users))
  const deleted = users.find(user => user.id === id);
  if(deleted) {
    console.log(deleted)
    users = users.filter(user => user.id !== id);
    return res.send(users);
  }
  else {
    console.log(deleted)
    return res.status(404).json({ message: 'recipe you are looking for does not exist' });
  }
  // console.log(JSON.stringify());
});

// router.set('view engine','ejs')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//   res.render('App')
// });

module.exports = router;
