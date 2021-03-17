var express = require("express");
var router = express.Router();
var Animation = require("./animationModel");

//Get All data
router.get("/", (req, res) => {
  Animation.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// Get one (Specific)
router.get("/:id", (req, res) => {
  Animation.findById(req.params.id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

//POST
router.post("/", async(req, res) => {
  var obj = new Animation(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send({
      message: "Create data success",
      data: data,
    });
  });
});


//PUT Update
router.put("/:id", (req, res) => {
  Animation.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send({
      message: "Update success",
    });
  });
});


//Delete  Remove
router.delete("/:id", (req, res) => {
  Animation.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send({ message: `Delete success` });
  });
});

module.exports = router;
