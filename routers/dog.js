const { Router } = require("express");
const Dog = require("../models/").dog;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    res.status(200).send(dogs);
    // res.json(dogs);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const dogDetailId = req.params.id;
    if (isNaN(parseInt(dogDetailId))) {
      res.status(400).send("Dog Detail ID is not a number");
    }
    const dogDetail = await Dog.findByPk(dogDetailId);
    if (dogDetail === null) {
      res.status(404).send("Dog Detail not found");
    }
    res.status(200).send(dogDetail);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
