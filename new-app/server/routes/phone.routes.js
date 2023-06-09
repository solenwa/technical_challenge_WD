const router = require("express").Router();
const Phone = require("../models/Phone.model");

router.get("/phones", async (req, res, next) => {
  try {
    const response = await Phone.find();
    res.send({ data: response });
  } catch (error) {
    console.log(error);
  }
});

router.get("/phones/:id", async (req, res, next) => {
  try {
    const response = await Phone.findById(req.params.id);
    res.send({ data: response });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
