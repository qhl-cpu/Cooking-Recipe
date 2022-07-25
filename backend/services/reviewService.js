const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
    type: Array
  }
});

const Review = mongoose.model('review', reviewSchema);

/**
 * Get all review from database
 * 
 * @returns {Array} a list of all review stored in BD
 */
const getReviews = async () => {
  try {
    const review = await Review.find({});
    console.log(123);
    return review;
  } catch (error) {
    throw { type: 'DB', message: error };
  }
};

/**
 * Get an instructor with given id from database
 * 
 * @param {string} id 
 * 
 * @returns {object} instructor with given id
 * @throws {object} error - type and messages
 */
 const getReviewsById = async (id) => {
    var idx = '62c66ebb7751c2e99fb51d40';
    try {
        console.log(1234);
        const review = await Review.findById(id);
        return review;
    } catch (error) {
        throw { type: 'DB', message: error }
    }
}

/**
 * Add an recipe to the database
 * 
 * @param {object} review 
 * 
 * @returns {object} recipe has been added to the db
 * @throws {object}} error - type and messages
 */
const addReview = async (review) => {
  const newReview = new Review(review);

  // validation https://mongoosejs.com/docs/api.html#document_Document-validateSync
  const validationError = newReview.validateSync();
  if (validationError) {
    throw { type: 'validation', message: validationError };
  }
  try {
    await newReview.save();
    return newReview;
  } catch (error) {
    throw ({ type: 'DB', message: error })
  }
}

// initialRecipe1.save().then(() => console.log("first entry added"));
// initialRecipe2.save().then(() => console.log("second entry added"));

module.exports = {
  Review,
  getReviews,
  getReviewsById,
  addReview
}