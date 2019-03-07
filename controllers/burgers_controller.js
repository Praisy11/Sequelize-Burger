var express = require("express");
var db = require("../models");
// Import the model (cat.js) to use its database functions.
//var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.GET will SelectAll
module.exports = function(app) {
// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      //console.log(results);
      res.render("index", {
        burgers: results,
      });
    }).catch(function(err){
      console.log(err);
    }); 
}); 


app.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.end();
    });
});


app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy ({
      where: {
        id: req.params.id
      }
    }).then(function(result){
      res.end();
    });   
  });


}