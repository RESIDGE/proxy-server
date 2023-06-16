const controller = require("../controller/artistController");
const express = require("express");
const router = express.Router();

// Get all artists by id
router.route("/:artistId").get(controller.getArtistByID);

// Get top 5 tracks
router.route("/:artistId/top").get(controller.getArtistTop);

// Get albums
router.route("/:artistId/albums").get(controller.getArtistAlbums);

// Get playlists
router.route("/:artistId/playlists").get(controller.getArtistPlaylists);

// Get radio
router.route("/:artistId/radio").get(controller.getArtistRadio);

// Get related artists
router.route("/:artistId/related").get(controller.getRelatedArtists);

module.exports = router;
