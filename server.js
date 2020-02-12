// Dependencies
// =============================================================
var express = require("express");
const db = require("./app/models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./groupproject2/app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  })
})