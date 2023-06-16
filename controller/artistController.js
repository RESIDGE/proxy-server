const axios = require("axios");

// Get artist by id
exports.getArtistByID = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}`
    );
    const artist = await response.data;
    res.status(200).json(artist);
    console.log(artist);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An error occurred while getting artist." });
  }
};

// Get artist top 5 tracks
exports.getArtistTop = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}/top`
    );
    const artistTop = await response.data.data;
    res.status(200).json(artistTop);
    console.log(artistTop);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while getting artist's top 5 tracks.",
    });
  }
};

// Get artist albums
exports.getArtistAlbums = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}/albums`
    );
    const artistAlbums = await response.data.data;
    res.status(200).json(artistAlbums);
    console.log(artistAlbums);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while getting artist's albums.",
    });
  }
};

// Get artist playlists
exports.getArtistPlaylists = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}/playlists`
    );
    const artistPlaylists = await response.data.data;
    res.status(200).json(artistPlaylists);
    console.log(artistPlaylists);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while getting artist's playlists.",
    });
  }
};

// Get artist radio
exports.getArtistRadio = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}/radio`
    );
    const artistRadio = await response.data.data;
    res.status(200).json(artistRadio);
    console.log(artistRadio);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while getting artist's radio.",
    });
  }
};

// Get related artists
exports.getRelatedArtists = async function (req, res) {
  try {
    const artistId = req.params.artistId;
    const response = await axios.get(
      `https://api.deezer.com/artist/${artistId}/related`
    );
    const relatedArtists = await response.data.data;
    res.status(200).json(relatedArtists);
    console.log(relatedArtists);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while getting related artists.",
    });
  }
};
