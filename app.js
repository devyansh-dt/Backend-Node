const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const config = require("./config")

require("dotenv").config();

const app = express();

const port = config.port;

//parsing middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//static files

app.use(express.static("public"));

//handlebars engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      // Helper 4 index
      increment: function (value) {
        return parseInt(value) + 1;
      },
    },
  })
);
app.set("view engine", "hbs");

// connection
const pool = mysql.createPool(config.dbConfig);

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to the Database");
});

const routes = require("./server/routes/user");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
