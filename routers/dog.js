const { Router } = require("express");
const Dog = require("../models/").dog;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    console.log("Dog:", dogs);
    res.status(200).send(dogs);
    // res.json(dogs);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
