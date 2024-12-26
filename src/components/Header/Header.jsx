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
} from '@mui/material';
import {
  FavoriteBorder,
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

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

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
    // Remove the user from localStorage
    localStorage.removeItem('user');
    
    // Update the state to reflect the logout action
    setIsLoggedIn(false);
    setUserName('');
    
    // Navigate to the sign-in page after state update
    navigate('/');
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
      {/* Removed "My Profile" MenuItem */}
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
      {/* Make AppBar fixed at the top */}
      <AppBar
        position="fixed"  // Change position to fixed
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
            {/* Left Section - Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
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

            {/* Right Section - User and Icons */}
            {isMobile ? (
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
            ) : (
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

                {/* Language Selector */}
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

                {/* Shopping Cart */}
                <IconButton sx={{ color: 'black' }}>
                  <Badge badgeContent={4} color="error">
                    <ShoppingBagIcon />
                  </Badge>
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {renderProfileMenu}
      {renderLanguageMenu}

      {/* Add margin-top to content to avoid overlap with fixed AppBar */}
      <Box sx={{ marginTop: '64px' }}>
        {/* Your main content here */}
      </Box>
    </Box>
  );
}
