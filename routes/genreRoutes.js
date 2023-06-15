const controller = require("../controller/genreContoller");
const express = require("express");
const router = express.Router();

router.route("").get(controller.getGenres);

module.exports = router;
