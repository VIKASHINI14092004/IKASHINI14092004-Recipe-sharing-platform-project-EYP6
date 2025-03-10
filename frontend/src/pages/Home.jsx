import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import backgroundImage from "./img1.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
      
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        
      }}
    >
      <Typography variant="h2" fontWeight="bold" sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
      Welcome to FlavorsOfLegacy – Where Every Bite is a Memory!
      </Typography>
      <Typography variant="h5" mt={2} maxWidth="600px" sx={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
      Delight, Discover, and Share – Creating Culinary Memories! 
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4, padding: "10px 20px", fontSize: "18px"}}
        onClick={() => navigate("/add-recipe")}
      >
        Craft Your Culinary Magic!
      </Button>
    </Box>
  );
};

export default Home;









