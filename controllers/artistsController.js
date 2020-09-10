const express = require("express");
const router = express.Router();

const ArtistModel = require("../models").Artist;
const SongModel = require("../models").Song;

// GET Artist PROFILE
router.get("/profile/:id", async (req, res) => {
  let artist = await ArtistModel.findByPk(req.params.id, {
     include: UserModel,
     attributes: ["name", "id"],
  });
  res.json({ artist });
});

// GET ALL Artists
router.get("/", async (req, res) => {
  let artists = await ArtistModel.findAll({include: SongModel});
  res.json({ artists });
});

// CREATE A NEW Artist
router.post("/", async (req, res) => {
  let artist = await ArtistModel.create(req.body);
  res.json({ artist });
});

// UPDATE an Artist
router.put("/:id", async (req, res) => {
  let updatedArtist = await ArtistModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let artist = await ArtistModel.findByPk(req.params.id, {
    include: SongModel,
  });
  res.json({ artist });
});

// DELETE an Artist
router.delete("/:id", async (req, res) => {
  await ArtistModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Artist with id ${req.params.id} was deleted`,
  });
});

// Add a new song
router.post("/newsong", async (req, res) => {
  let song = await SongModel.create(req.body);
  res.json({ song });
});



module.exports = router;
