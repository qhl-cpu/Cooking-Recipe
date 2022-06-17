const  express = require('express');
const  router = express.Router();
const { v4: uuid } = require('uuid');
const users = [
  { id: uuid(), RecipeTitle: 'scrambled eggs with tomatoes',
  Ingredients: '2eggs, 1 tomato, salt',
  Instructions: 'fry the tomatoes and then add eggs',
  EstimatedCookingTime: 15,
  complete: false},
  { id: uuid(), name: 'Ian' },
  { id: uuid(), name: 'Danya' }
];

router.get('/', function (req, res, next) {
  return res.send(users);
});

router.post('/', function (req, res, next) {
  if (!req.body.title) {
    return res.status(400).send({ message: 'User must have a name!' })
  }
  const user = { id: uuid(), RecipeTitle: req.body.title,
    Ingredients: req.body.ingredient, Instructions: req.body.instruction,
    EstimatedCookingTime: req.body.cookingTime, complete: req.body.complete};
  users.push(user);
  return res.send(user);
});

// router.set('view engine','ejs')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//   res.render('App')
// });

module.exports = router;
