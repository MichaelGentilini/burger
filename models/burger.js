var orm = require("../config/orm.js");


// ? need to require userinput for value for burgerId

// ! Display all burgers
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cb) {
    orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, function (res) {
      cb(res);
    });
  },
  updateOne: function (cb) {
    orm.updateOne("burgers", "devoured", true, "id", burgerId, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;