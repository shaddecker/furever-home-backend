const express = require("express");
const router = express.Router();
const AnimalModel = require("../models").Animals;
const TestsModel = require("../models").Tests;

// GET Animal PROFILE
router.get("/profile/:id", async (req, res) => {
  let animal = await AnimalModel.findByPk(req.params.id, {
     include: TestsModel,
     attributes: ["type", "felinefiv","felineid","canineheartworm"],
  });
  res.json({ animal });
});

// GET ALL Animals
// router.get("/", async (req, res) => {
//   let animals = await AnimalModel.findAll({include: SongModel});
//   res.json({ animals });
// });
router.get("/", async (req, res) => {
  let animals = await AnimalModel.findAll();
  res.json({ animals });
});

// CREATE A NEW Animal
router.post("/", async (req, res) => {
  let animal = await AnimalModel.create(req.body);
  res.json({ animal });
});

// UPDATE an Animal
router.put("/:id", async (req, res) => {
  let updatedAnimal = await AnimalModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let animal = await AnimalModel.findByPk(req.params.id, {
    // include: SongModel,
  });
  res.json({ animal });
});

// DELETE an Animal
router.delete("/:id", async (req, res) => {
  await AnimalModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Animal with id ${req.params.id} was deleted`,
  });
});

// Add a new vacination
// router.post("/newsong", async (req, res) => {
//   let song = await SongModel.create(req.body);
//   res.json({ song });
// });



module.exports = router;
