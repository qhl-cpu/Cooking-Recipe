const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const service = require('../services/reviewService');

let reviews = [
    {
        id: '62c66ebb7751c2e99fb51d40', review: ['best scrambled eggs with tomatoes']
    },
    {
        id: 2, review: ['best Garlic Asparagus with Lime']
    }
];

router.get('/', function (req, res, next) {
    // return res.send(reviews);
    service.getReviews()
        .then((reviews) => {
            return res.status(200).send(reviews);
        })
        .catch((error) => {
            return res.status(500).send({ error: error.message });
        })
});

router.get('/:id', function (req, res, next) {
    const id = req.body.id + "";
    console.log(id);
    service.getReviewsById(id)
        .then((reviewFound) => {
            console.log(reviewFound);
            return res.status(200).send(reviewFound);
        })
        .catch((error) => {
            return res.status(404).send({ error: { message: `cannot find instructor with id ${id}` } });
        })

    // const id = req.body.id

    // const findReview = reviews.find(review => review.id + "" === id);
    // if (findReview) {
    //     reviews.forEach((element, index) => {
    //         if (element.id + "" === id) {
    //             //const review = reviews[index]
    //             return res.send(element);
    //         }
    //     });
    // }
    // else {
    //     return res.status(404).json({ message: 'recipe you are looking for does not exist' });
    // }
});

router.post('/', function (req, res, next) {
    if (!req.body.review) {
        return res.status(400).send({ message: 'review must have a content!' })
    }
    console.log(typeof (req.body.id))
    const review = {
        id: req.body.id+ "", review: [req.body.review]
    };
    // reviews.push(review)
    service.addReview(review)
    .then((reviewAdded) => {
        return res.status(200).send(reviewAdded);
      })
      .catch((error) => {
        if (error.type === 'validation') {
          return res.status(400).send({ error: error.message });
        } else {
          return res.status(500).send({ error: error.message });
        }
      })
    // return res.send(review);
});



router.patch('/:id', function (req, res, next) {
    if (!req.body.review) {
        return res.status(400).send({ message: 'review must have a content!' })
    }
    const idExist = reviews.find(review => review.id + '' === req.body.id);

    if (idExist) {
        const reviewIndex = reviews.findIndex((element) => element.id + '' === req.body.id);
        reviews[reviewIndex].review.push(req.body.review)
        return res.send({ reviewIndex: reviewIndex, review: req.body.review });
    }
    else {
        return res.status(404).json({ message: 'recipe you are looking for does not exist' });
    }
});

module.exports = router;
