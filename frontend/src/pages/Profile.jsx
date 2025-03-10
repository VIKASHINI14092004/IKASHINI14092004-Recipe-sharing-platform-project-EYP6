import React from "react";
import { Container, Grid2, Typography, Card, CardContent, Avatar } from "@mui/material";
import lini from './girll.png';

const Profile = () => {
  // Dummy user details (replace with actual user data)
  const user = {
    profilePic: lini, // Replace with actual image URL
    name: "VIKASHINI SIVASELVAMOORTHI",
    username: "Vimi",
    contact: "+91 7708684245",
    email: "vimi@example.com",
    department: "Artificial Intelligence & Data Science",
    college: "Rajalakshmi Engineering College",
  };

  return (
    

    <Container maxWidth="md" sx={{ 
      mt: 10, 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh" 
    }}>
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <Grid2 container spacing={3} alignItems="centre">
          {/* Left Side - Profile Picture */}
          <Grid2 item xs={12} sm={4} display="flex" justifyContent="centre">
            <Avatar 
              src={user.profilePic} 
              alt={user.name} 
              sx={{ width: 150, height: 150, border: "3px solid,rgb(154, 134, 9)" }}
            />
          </Grid2>

          {/* Right Side - User Details */}
          <Grid2 item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                @{user.username}
              </Typography>
              <Typography variant="h6" color="textSecondary"><strong>Contact:</strong> {user.contact}</Typography>
              <Typography variant="h6" color="textSecondary"><strong>Email:</strong> {user.email}</Typography>
              <Typography variant="h6" color="textSecondary"><strong>Department:</strong> {user.department}</Typography>
              <Typography variant="h6" color="textSecondary"><strong>College:</strong> {user.college}</Typography>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
    </Container>
  );
};

export default Profile;



  