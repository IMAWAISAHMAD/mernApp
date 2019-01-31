var mongoose = require("mongoose");

var db_url = "mongodb://awais:awais123@ds117535.mlab.com:17535/user";
mongoose.connect(
  db_url,
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", function() {
  console.log("Successfully connected to DB");
});
