const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
let reviews = [
    {
        id: 1, review: 'best scrambled eggs with tomatoes'
    },
    {
        id: 2, review: 'best Garlic Asparagus with Lime'
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



module.exports = router;
