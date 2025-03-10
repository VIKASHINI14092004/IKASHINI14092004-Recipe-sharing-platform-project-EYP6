import brownieImage from './Brownie.jpg';
import PastaImage from './pasta.jpg';
import cheeseImage from './cheesecake.avif';
import ButterchickenImage from './butter chicken.jpg';
import burgerImage from './burger.webp';

export const recipes = [
  {
    id: 1,
    name: "Choco Fudgy Brownies",
    image: brownieImage,
    instructions: ["Butter", "Chocolate", "Sugar", "Eggs", "Flour", "Cocoa Powder", "Vanilla"],
    ingredients: [
      "Melt butter and dark chocolate together until smooth.",
      "Whisk in sugar until fully combined.",
      "Add eggs one at a time, beating well after each addition.",
      "Fold in flour, cocoa powder, and a pinch of salt gently.",
      "Stir in vanilla extract and optional chocolate chunks for extra richness.",
      "Pour batter into a lined pan and bake at 175°C (350°F) for 25-30 minutes.",
      "Let cool completely before slicing for the perfect fudgy texture."
    ]
  },
  {
    id: 2,
    name: "Jalapeño Alfredo Pasta",
    image: PastaImage,
    instructions: ["Butter", "Garlic", "Jalapeño", "Cream", "Cheese", "Pasta", "Seasoning"],
    ingredients: [
    "Melt butter in a pan over medium heat.",
    "Sauté minced garlic and chopped jalapeños until fragrant.",
    "Pour in heavy cream and stir continuously.",
    "Add grated Parmesan cheese and mix until smooth and creamy.",
    "Season with salt, black pepper, and optional Italian herbs.",
    "Toss in cooked pasta and mix well to coat evenly with the sauce.",
    "Serve hot, garnished with extra cheese and sliced jalapeños for a spicy kick."
    ]
  },
  {
    id: 3,
    name: "Double-stacked Cheese Burger",
    image: burgerImage,
    instructions: ["Buns", "Patties", "Toppings", "Assembly"],
    ingredients: [
      "Toast sesame burger buns with butter until golden brown.",
      "Season ground beef with salt, pepper, garlic powder, and shape into patties.",
      "Grill or pan-sear the patties until fully cooked, adding cheese on top to melt.",
      "Cook bacon until crispy and set aside.",
      "Layer the bottom bun with barbecue sauce, pickles, and a grilled patty.",
      "Add another slice of cheese, a second patty, crispy bacon, and lettuce.",
      "Top with mayonnaise or burger sauce, place the bun on top, and serve hot."
    ]
  },
  {
    id: 4,
    name: "Cottage Cheese Cake",
    image: cheeseImage,
    instructions: ["Crust", "Filling", "Baking", "Cooling", "Garnishing"],
    ingredients: [
    "Crush graham crackers and mix with melted butter and sugar.",
    "Press the mixture into a springform pan and bake at 175°C (350°F) for 10 minutes.",
    "Beat cream cheese, sugar, eggs, vanilla extract, and sour cream until smooth.",
    "Pour the filling over the crust and bake at 160°C (320°F) for 50-60 minutes until set.",
    "Turn off the oven and let the cheesecake cool inside with the door slightly open.",
    "Refrigerate for at least 4 hours before serving.",
    "Garnish with fresh raspberries, blueberries, and mint leaves."
  ]
  },
  {
    id: 5,
    name: "Butter Chicken (Murgh Makhani)",
    image: ButterchickenImage,
    instructions: ["Chicken", "Marination", "Cooking", "Sauce", "Finishing"],
    "ingredients": [
      "Marinate chicken with yogurt, lemon juice, ginger-garlic paste, turmeric, red chili powder, garam masala, and salt. Let it rest for 2-4 hours.",
      "Grill or pan-sear the marinated chicken until slightly charred and cooked through.",
      "In a pan, melt butter and sauté onions until golden brown.",
      "Add tomato purée, ginger-garlic paste, chili powder, salt, and garam masala. Cook until the oil separates.",
      "Pour in fresh cream, cashew paste, and honey for a rich, creamy texture.",
      "Add the grilled chicken and simmer for 10-15 minutes until flavors blend.",
      "Garnish with fresh coriander and serve with naan or basmati rice."
    ]
  },
  
];
