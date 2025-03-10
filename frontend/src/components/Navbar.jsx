import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the logo effect

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0, 0, 0, 0.8)", 
        backdropFilter: "blur(10px)", 
        padding: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.31)"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h5" className="shining-logo">
          FlavorsOfLegacy
        </Typography>

        {/* Navigation Links */}
        <Box>
          {[
            { to: "/", label: "Home" },
            { to: "/recipes", label: "Recipes" },
            { to: "/add-recipe", label: "Create Recipe" },
            { to: "/profile", label: "Profile" }
          ].map((item) => (
            <Button
              key={item.to}
              component={Link}
              to={item.to}
              sx={{
                color: "#ffffff",
                mx: 2,
                background: location.pathname === item.to ? "#333333" : "transparent", // Darken when active
                "&:hover": { background: "#222222" }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Login & Signup */}
        <Box>
          <Button
            component={Link}
            to="/login"
            sx={{
              background: "#0b1488",
              color: "#ffffff",
              mx: 1,
              fontWeight: "bold",
              "&:hover": { background: "#0a0f60" }
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            sx={{
              background: "#0b1488",
              color: "#ffffff",
              mx: 1,
              fontWeight: "bold",
              "&:hover": { background: "#e68900" }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
