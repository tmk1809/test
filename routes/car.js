var express = require("express");
const { MongoClient } = require("mongodb");
const CarModel = require("../models/CarModel");
var router = express.Router();

router.get("/allCar", async (req, res) => {
  var cars = await CarModel.find();
  res.render("allCar", { cars: cars });
});

router.get("/add", (req, res) => {
  res.render("newCar");
});

router.post("/add", async (req, res) => {
  var car = req.body;

  let server = await MongoClient.connect(
    "mongodb+srv://khoi12345:Khoi12345@cluster0.gnewi.mongodb.net/"
  );
  let dbo = server.db("ATNToys");
  dbo.collection("car").insertOne(car);
  res.redirect("/car/allCar");
});

router.get("/editCar/:id", async (req, res) => {
  var id = req.params.id;
  var car = await CarModel.findById(id);
  res.render("editCar", { car: car });
});

router.post("/editCar/:id", async (req, res) => {
  await CarModel.findByIdAndUpdate(req.params.id, req.body)
    .then(console.log("Edit successfully !"))
    .catch((err) => console.log(err));
  res.redirect("/car/allCar");
});

router.get("/deleteCar/:id", async (req, res) => {
    let remove = await CarModel.findByIdAndDelete(req.params.id)
    res.redirect("/car/allCar");
})

module.exports = router;
