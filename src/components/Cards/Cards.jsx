import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';

const restaurantData = [
  {
    title: 'BG Rogue – Cantt',
    description: 'Burgers',
    rating: 4.8,
    image: 'https://via.placeholder.com/150',
    offer: '20% off Rs.300',
  },
  {
    title: 'Quetta Paratha – 111',
    description: 'Pakistani',
    rating: 3.7,
    image: 'https://via.placeholder.com/150',
    offer: 'Up to 10% off',
  },
  {
    title: 'Ahmad Dahi Bhallay – Cavalry Ground',
    description: 'Pakistani',
    rating: 4.9,
    image: 'https://via.placeholder.com/150',
    offer: '20% off Rs.300',
  },
];

const Cards = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {restaurantData.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image}
                alt={restaurant.title}
              />
              <CardContent>
                <Chip label={restaurant.offer} color="secondary" size="small" sx={{ mb: 1 }} />
                <Typography variant="h6">{restaurant.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  ⭐ {restaurant.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
