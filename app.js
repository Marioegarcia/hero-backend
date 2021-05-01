const express = require("express");
const cors = require("cors");

const app = express();
const { API_VERSION } = require("./config");

// Load routings
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const heroRoutes = require("./routers/hero");


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, heroRoutes);


module.exports = app;
