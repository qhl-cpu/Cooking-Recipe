const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
let reviews = [
    {
        id: 1, review: ['best scrambled eggs with tomatoes']
    },
    {
        id: 2, review: ['best Garlic Asparagus with Lime']
    }
];

router.get('/', function (req, res, next) {
    return res.send(reviews);
});

router.get('/:id', function (req, res, next) {
    const id = req.body.id

    const findReview = reviews.find(review => review.id + "" === id);
    if (findReview) {
        reviews.forEach((element, index) => {
            if (element.id + "" === id) {
                //const review = reviews[index]
                return res.send(element);
            }
        });
    }
    else {
        return res.status(404).json({ message: 'recipe you are looking for does not exist' });
    }
});

router.post('/', function (req, res, next) {
    if (!req.body.review) {
        return res.status(400).send({ message: 'review must have a content!' })
    }
    console.log(typeof (req.body.id))
    const review = {
        id: req.body.id, review: [req.body.review]
    };
    reviews.push(review)
    return res.send(review);
});

router.patch('/:id', function (req, res, next) {
    if (!req.body.review ) {
        return res.status(400).send({ message: 'review must have a content!' })
      }
      const idExist = reviews.find(review => review.id+'' === req.body.id);

    if (idExist) {
      const reviewIndex = reviews.findIndex((element) => element.id+'' === req.body.id);
      reviews[reviewIndex].review.push(req.body.review)
      return res.send({reviewIndex: reviewIndex, review: req.body.review});
    }
    else {
      return res.status(404).json({ message: 'recipe you are looking for does not exist' });
    }
});

//   router.post('/', function (req, res, next) {
//     if (!req.body.review ) {
//       return res.status(400).send({ message: 'review must have a content!' })
//     }
//     console.log(typeof(req.body.id))
//     const idExist = reviews.find(review => review.id === parseInt(req.body.id));
//   if (idExist) {
//     const reviewIndex = reviews.findIndex((element) => element.id === parseInt(req.body.id));
//     console.log(reviewIndex)
//     reviews[reviewIndex].review.push(req.body.review)
//     return res.send({reviewIndex: reviewIndex, review: req.body.review});
//   }
//   else {
//     return res.status(404).json({ message: 'recipe you are looking for does not exist' });
//   }
//     // const review = {
//     //   id: req.body.id, review: req.body.review
//     // };
//     // reviews.push(review);
//     // return res.send(review);
//   });

module.exports = router;
