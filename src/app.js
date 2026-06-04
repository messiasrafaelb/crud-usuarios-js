const express = require("express");
const testRoute = require("./routes/test-route");
const usuarioRoute = require("./routes/usuario-route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(testRoute);
app.use(usuarioRoute);

app.get("/", (req, res) => {
  res.send("Api funcionando");
});

module.exports = app;
