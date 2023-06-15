const axios = require("axios");

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
