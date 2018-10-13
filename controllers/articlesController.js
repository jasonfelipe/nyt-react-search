const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res){
    console.log("this is our req.body inside findbyid: ", req.body)
    db.Article 
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res){
    console.log(req.params)
    db.Article
      .findOneAndDelete({
        articleHeadline: req.params.articleHeadline
      }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }

};
