const controller = require("../controller/genreContoller");
const express = require("express");
const router = express.Router();

// Get all genres route
router.route("").get(controller.getGenres);

// Get all artists by genre id route
router.route("/:genreId/artists").get(controller.getGenreArtists);

module.exports = router;
