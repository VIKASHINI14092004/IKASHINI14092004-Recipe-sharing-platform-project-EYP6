const express = require("express");
const Recipe = require("../models/Recipe");
const authMiddleware = require("../routes/authMiddleware");

const router = express.Router();


router.post("/add", authMiddleware, async (req, res) => {
  const { dishName, ingredients, steps, dishImage } = req.body;
  const userId = req.user.id; 

  try {
    const newRecipe = new Recipe({
      userId,
      dishName,
      ingredients: ingredients.split(","),
      steps: JSON.parse(steps),
      dishImage: dishImage || "", 
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving recipe" });
  }
});


router.get("/all", async (req, res) => {
  try {
    const userRecipes = await Recipe.find();
    const commonRecipes = [
      { id: "common1", dishName: "Pasta", ingredients: ["Pasta", "Tomato Sauce"], steps: [{ step: "Boil pasta", time: 10 }], dishImage: "/images/pasta.jpg" },
      { id: "common2", dishName: "Salad", ingredients: ["Lettuce", "Tomato"], steps: [{ step: "Chop vegetables", time: 5 }], dishImage: "/images/salad.jpg" }
    ];
    const allRecipes = [...commonRecipes, ...userRecipes];

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

module.exports = router;
