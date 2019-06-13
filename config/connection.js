var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// ! this did not work
// if (process.env.JAWSDB_URL) {
//   connection = mysql.connection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
//     port: 3306,
//     user: "sc2ht1yrctuti0us",
//     password: "tef11dweisptei0j",
//     database: "r1j439akps1z7elh"
//   });
// }

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export to orm.js
module.exports = connection;