var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

  console.log(res.params);

  burger.selectAll(function (data) {
    var burgerObj = {
      burgers: data
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});


router.post("/api/burgers", function (req, res) {
  burger.insertOne(['newBurger', 'devoured', false, 'id'], [req.body.newBurger, 'devoured', false, req.body.id], function (result) {
    console.log(req.body)
    // Send back the ID of the new quote
    // res.json({
    //   }
  });
});


// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



module.exports = router;