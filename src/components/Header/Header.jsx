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
  MoreVert,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import CartList from '../Cart-list/Cart';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]); // State to track cart items
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer visibility

  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setIsLoggedIn(true);
      setUserName(savedUser.name); // Assuming user data is saved during login/signup
    }
  }, []);

  // Add item to the cart
  const AddToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const itemExists = prevItems.some(cartItem => cartItem.id === item.id);
      if (!itemExists) {
        const updatedCart = [...prevItems, item];
        console.log("Updated Cart:", updatedCart); // Log to see if the cart updates correctly
        return updatedCart;
      } else {
        console.log("Item already in cart");
        return prevItems; // Return existing cart if item already added
      }
    });
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  // Updated handleLogout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  const handleCartClick = () => {
    setDrawerOpen(true); // Open the drawer when the cart icon is clicked
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false); // Close the drawer when clicking outside or pressing close
  };

  const menuId = 'primary-search-account-menu';
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
      <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ marginRight: 1 }} />
        Logout
      </MenuItem>
    </Menu>
  );

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
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: 'none',
          paddingX: { xs: 1, sm: 3, md: 5 },
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="foodpanda" style={{ height: 30 }} />
              <Typography
                variant="h6"
                sx={{
                  color: '#ff2b85',
                  fontWeight: '600',
                  fontSize: { xs: '16px', sm: '22px', md: '24px' },
                  marginLeft: 1,
                }}
              >
                foodpanda
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {!isLoggedIn ? (
                <>
                  <Button
                    sx={{
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      marginRight: 2,
                      border: '1px solid #000000',
                      borderRadius: 2,
                      px: 3,
                    }}
                    onClick={() => navigate('/sign-in')}
                  >
                    Log in
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#c21760',
                      marginRight: 2,
                      border: '1px black #ff3366',
                      borderRadius: 2,
                      px: 3,
                    }}
                    onClick={() => navigate('/sign-up')}
                  >
                    Sign up
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h6" sx={{ marginRight: 2 }}>
                    <Person2Icon /> {userName}
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    sx={{ color: 'black' }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </>
              )}

              <IconButton
                size="large"
                aria-label="change language"
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                sx={{ color: 'black', marginRight: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LanguageIcon />
                  <Typography sx={{ marginLeft: 0.5 }}>EN</Typography>
                  <KeyboardArrowDownIcon sx={{ marginLeft: 0.5 }} />
                </Box>
              </IconButton>

              <IconButton size="large" aria-label="show cart items" color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>

              <IconButton sx={{ color: 'black' }} onClick={() => navigate('/favourite')}>
                <Badge badgeContent={0} color="error">
                  <Favorite />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {renderProfileMenu}
      {renderLanguageMenu}

      <Box sx={{ marginTop: '64px' }}></Box>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            width: 350,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">Cart Items</Typography>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Rs. ${item.price}`}
                  />
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
