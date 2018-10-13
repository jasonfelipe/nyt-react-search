const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new object
const ArticleSchema = new Schema({
  articleHeadline: {
    type: String,
    required: true
  },
  articleSnippet: {
    type: String,
    required: true
  },
  articleUrl: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
