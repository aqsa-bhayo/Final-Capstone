// Favorites.js
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Header/Header"; // Import your Header component here
import Footer from "../../Footer/Footer"; // Import Footer component
import { Container, Box, Typography, Grid } from "@mui/material"; // Material UI components for better styling

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Favorites Page Section */}
      <Box sx={{ paddingTop: "40px", backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "50px" }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ fontWeight: "700", color: "#333", textAlign: "center", marginBottom: "40px" }}>
            Your Favorite Restaurants
          </Typography>

          {/* Favorites Grid */}
          <Grid container spacing={4}>
            {favorites.length > 0 ? (
              favorites.map((restaurant) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden relative cursor-pointer">
                    <div className="w-full h-60 relative">
                      <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover rounded-t-xl" />
                    </div>
                    <div className="py-4 px-4">
                      <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "16px", color: "#444" }}>
                        {restaurant.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
                        {restaurant.category}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
                        ⭐ {restaurant.rating}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: "#888", textAlign: "center" }}>
                  You have no favorites yet! Start adding some.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Favorites;
