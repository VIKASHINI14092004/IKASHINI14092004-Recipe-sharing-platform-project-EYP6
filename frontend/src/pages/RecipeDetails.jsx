


import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes"; 
import { Container, Grid2, Typography, Card, CardMedia } from "@mui/material";
import "../App.css"; 

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <Typography variant="h4" textAlign="center">
        Recipe Not Found!
      </Typography>
    );
  }

  return (
    <Container
      className="recipe-details"
      sx={{
        maxWidth: "1000px",  
        width: "100%",
        padding: "20px",
        background: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center",
        margin: "auto",      
        mt: 4,              
        
      }}
    >
      <Grid2 container spacing={4} className="recipe-details-grid">
        {/* Left: Recipe Image */}
        <Grid2 item xs={12} md={5}>
          <Card className="recipe-card">
            <CardMedia
              component="img"
              image={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
          </Card>
        </Grid2>

        {/* Right: Recipe Details */}
        <Grid2 item xs={12} md={7} className="recipe-content" sx={{ textAlign: "left" }}>
          <Typography variant="h3" className="recipe-title">
            {recipe.name}
          </Typography>
          
          <Typography variant="h5" className="recipe-subtitle" sx={{ mt: 2 }}>
            Instructions:
          </Typography>
          {recipe.ingredients.map((ingredient, idx) => (
            <Typography key={idx} variant="body1" className="recipe-text">
              • {ingredient}
            </Typography>
          ))}

          {}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default RecipeDetails;

