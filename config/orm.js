var connection = require("./connection.js");

var orm = {
  selectAll: function (tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableName, col1, col2, burgerName, devouredVal) {
    var queryString = "INSERT INTO ??(??,??) VALUES (?,?)";

    connection.query(queryString, [tableName, col1, col2, burgerName, devouredVal], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (tableName, col1, value, colID, idVal) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableName, col1, value, colID, idVal], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;