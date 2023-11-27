const express = require("express");
const cors = require("cors");

const app = express();
require('./model/index.js');
var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is up and running fine" });
});

// const db = require("./model/index.js");

// db.Sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
// });

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
