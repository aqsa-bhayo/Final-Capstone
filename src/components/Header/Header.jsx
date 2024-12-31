import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Favorite,
  ShoppingCart,
  AccountCircle,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CartList from '../Cart-list/Cart'; // Make sure this component handles cart display

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the drawer visibility

  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Checking for saved user info in local storage (logged-in status)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setIsLoggedIn(true);
      setUserName(savedUser.name);
    }
  }, []);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id); // Check if the item already exists in the cart
      if (!itemExists) {
        return [...prevItems, item]; // Add item to the cart
      }
      return prevItems; // Return existing cart if item already exists
    });
  };

  // Handle opening and closing of the profile menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle opening and closing of the language menu
  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  // Handle opening the cart drawer
  const handleCartClick = () => {
    setDrawerOpen(true);
  };

  // Handle closing the cart drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuId = 'primary-search-account-menu';

  // Profile menu
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={() => navigate('/profile')}>My Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  // Language menu
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={Boolean(languageAnchorEl)}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', color: '#000000', boxShadow: 'none' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="foodpanda" style={{ height: 30 }} />
              <Typography variant="h6" sx={{ color: '#ff2b85', fontWeight: '600', marginLeft: 1 }}>
                foodpanda
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Log in / Sign up buttons if not logged in */}
              {!isLoggedIn ? (
                <>
                  <Button sx={{ color: '#000000', display: 'flex', alignItems: 'center', marginRight: 2 }} onClick={() => navigate('/sign-in')}>
                    Log in
                  </Button>
                  <Button sx={{ color: 'white', backgroundColor: '#c21760', marginRight: 2 }} onClick={() => navigate('/sign-up')}>
                    Sign up
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h6" sx={{ marginRight: 2 }}>
                    {userName}
                  </Typography>
                  <IconButton size="large" aria-label="account" onClick={handleProfileMenuOpen}>
                    <AccountCircle />
                  </IconButton>
                </>
              )}

              {/* Language Menu */}
              <IconButton size="large" aria-label="change language" onClick={handleLanguageMenuOpen}>
                <LanguageIcon />
              </IconButton>

              {/* Cart Icon with Badge */}
              <IconButton size="large" aria-label="show cart items" color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>

              {/* Wishlist Icon */}
              <IconButton sx={{ color: 'black' }} onClick={() => navigate('/favourite')}>
                <Favorite />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Profile and Language Menus */}
      {renderProfileMenu}
      {renderLanguageMenu}

      {/* Cart Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 350, padding: 20, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Cart Items</Typography>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item.name} secondary={`Rs. ${item.price}`} />
                </ListItem>
              ))
            ) : (
              <Typography>No items in cart</Typography>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
