const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "views")));

// app.get("**", function (req, res, next) {
//   res.send("<h1> Hi there!</h1>");
// });

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`http://localhost:${port}`);
