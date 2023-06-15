const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));

// Genre Route
const genreRoute = require("./routes/genreRoutes");
app.use("/genre", genreRoute);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "public", "404.html"));
  } else if (req.accepts("json")) {
    req.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});

module.exports = app;
