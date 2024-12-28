import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const CartList = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}  // Close drawer when clicking outside
    >
      <Box
        sx={{
          width: 350,
          padding: 2,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Cart Items
        </Typography>
        <List>
          {/* Example of cart items */}
          <ListItem>
            <ListItemText primary="Item 1" secondary="Rs. 100" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" secondary="Rs. 200" />
          </ListItem>
          {/* More items */}
        </List>
      </Box>
    </Drawer>
  );
};

export default CartList;
