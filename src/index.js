import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './components/auth/Sign-in/SignIn.jsx';
import SignUp from './components/auth/Sign-up/SignUp.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store.js';
import App from './App.js';
import Restaurants from './components/SectionTwo/Resturants/Resturants.jsx';
import RestaurantFood from './components/SectionTwo/RestaurantFood/RestaurantFood.jsx';
import Favourite from './components/SectionTwo/Favourite/Favourite.jsx'
// import RestaurantItems from './components/SectionTwo/RestaurantItems/RestaurantItems.jsx'; // Import RestaurantItems component for dynamic routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/restaurants", // Static route for all restaurants
    element: <Restaurants />,
  },
  {
    path: "/restaurants/:cityName", // Dynamic route for city-specific restaurants
    element: <Restaurants />,
  },
  {
    path: "/RestaurantFood", // Static route for city-specific restaurant pages
    element: <RestaurantFood />,
  },
  {
    path: "/restaurant/:id", // Dynamic route for individual restaurant details
    element: <RestaurantFood />,
  },
  {
    path: "/favourite", // Dynamic route for individual restaurant details
    element: <Favourite />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
