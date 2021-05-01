const express = require("express");
const HeroController = require("../controllers/superhero");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-hero", [md_auth.ensureAuth], HeroController.addHero);
api.get("/get-heros", HeroController.getHeros);
api.delete("/delete-hero/:id", [md_auth.ensureAuth], HeroController.deleteHero);
api.get("/get-hero/:url", HeroController.getHero);

module.exports = api;
