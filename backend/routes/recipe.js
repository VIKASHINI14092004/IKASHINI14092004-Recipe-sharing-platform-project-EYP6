const express = require("express");
const Recipe = require("../models/Recipe");
const multer = require("multer");

const authMiddleware = require("../routes/authMiddleware");

const router = express.Router();


const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });


router.post("/add", authMiddleware, upload.single("dishImage"), async (req, res) => {
  const { dishName, ingredients, steps } = req.body;
  const userId = req.user.id; 

  try {
    const newRecipe = new Recipe({
      userId,
      dishName,
      ingredients: ingredients.split(","), 
      steps: JSON.parse(steps), 
      dishImage: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving recipe" });
  }
});

router.get("/my-recipes", authMiddleware, async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.user.id });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving recipes" });
  }
});

module.exports = router;
