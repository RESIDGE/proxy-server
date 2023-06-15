const axios = require("axios");

// Get all genres
exports.getGenres = async function (req, res) {
  try {
    const response = await axios.get("https://api.deezer.com/genre");
    const genres = await response.data.data;
    res.status(200).json(genres);
    console.log(genres);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An error occurred while getting genres." });
  }
};

// Get all artists of given genre id
exports.getGenreArtists = async function (req, res) {
  try {
    const genreId = req.params.genreId;
    const response = await axios.get(
      `https://api.deezer.com/genre/${genreId}/artists`
    );
    const genres = await response.data.data;
    res.status(200).json(genres);
    console.log(genres);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An error occurred while getting genre artists." });
  }
};
