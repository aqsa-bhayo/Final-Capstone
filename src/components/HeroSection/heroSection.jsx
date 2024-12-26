import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import heroImage from "../../assets/refresh-hero-home-pk.webp"; // Import the image
import MyLocationIcon from "@mui/icons-material/MyLocation";

export default function HeroSection() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", sm: "650px" },
          backgroundColor: "#f7f7f7",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 0 },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: 2, sm: 5 },
            textAlign: { xs: "center", sm: "left" },
            "@media (max-width: 1280px) and (min-width: 800px)": {
              padding: 3, // Optional: add padding adjustments if needed
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Open Sans", Arial, sans-serif',
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "35px", md: "38px" },
              color: "rgb(51, 51, 51)",
              lineHeight: 1.3,
              marginBottom: 3,
              marginLeft: { xs: 0, sm: "190px" },
              "@media (max-width: 1280px) and (min-width: 800px)": {
                marginLeft: "60px", // Adjust for screens between 1280px and 800px
                fontSize: "32px", // Adjust font size
                marginTop: "60px", // Adjust top margin
                whiteSpace: "nowrap", // Prevent line breaks
              },
            }}
          >
            It's the food and groceries you love,{" "}
            <span
              style={{
                display: "inline",
                "@media (max-width: 1280px) and (min-width: 800px)": {
                  display: "none", // Hide the line break on laptop screens
                },
              }}
            >
              <br />
            </span>
            delivered
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: 2,
              borderRadius: 2,
              boxShadow: "0px 0px 56px 6px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { xs: 0, sm: "190px" },
              gap: 2,
              "@media (max-width: 1280px) and (min-width: 800px)": {
                marginLeft: "58px", // Adjust for screens between 1280px and 800px
                padding: 3, // Optional: adjust padding if needed
              },
            }}
          >
            {/* Input Field */}
            <TextField
              placeholder="Your street and street number"
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: { xs: "100%", sm: 500 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: 47,
                  fontSize: 14,
                },
                "& .MuiInputBase-input": {
                  padding: "10px",
                  fontSize: 16,
                },
                "@media (max-width: 1280px) and (min-width: 800px)": {
                  "& .MuiOutlinedInput-root": {
                    height: 50, // Adjust height for screens between 1280px and 800px
                  },
                  fontSize: 16, // Adjust font size if needed
                },
              }}
              InputProps={{
                style: { fontSize: 18 },
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        color: "#c21760",
                        fontWeight: 600,
                        fontSize: 14,
                        textTransform: "none",
                        "@media (max-width: 1280px) and (min-width: 800px)": {
                          fontSize: 16, // Adjust font size for screens between 1280px and 800px
                        },
                      }}
                      startIcon={<MyLocationIcon />}
                    >
                      Locate me
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            {/* Find Food Button */}
            <Button
              sx={{
                backgroundColor: "#c21760",
                color: "#ffffff",
                borderRadius: 2,
                paddingX: 3,
                paddingY: 1,
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "16px" },
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#a80348f5",
                },
                "@media (max-width: 1280px) and (min-width: 800px)": {
                  px: 2, // Adjust horizontal padding for screens between 1280px and 800px
                  fontSize: "15px", // Adjust font size for this range
                  py: 0,
                },
              }}
            >
              Find Food
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", sm: "100%", md: "1000px" }, // Adjust height for medium screens
            maxHeight: 650,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover", // Ensure the image covers the container
            backgroundPosition: "center", // Keep the image centered
            backgroundRepeat: "no-repeat", // Avoid repeating the background image
            marginLeft: { sm: "auto" },
            width: { xs: "100%", sm: "40%", md: "50%" }, // Adjust width for larger screens (e.g., laptops)
          }}
        ></Box>
      </Box>
    </Box>
  );
}
