import React, { Suspense } from 'react';
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
import FootDetailPage from './components/SectionTwo/FootDetailPage/FootDetailPage.jsx';
import MyProfile from './components/myProfile/MyProfile.jsx';
import CartList from './components/Cart-list/Cart.jsx';
import Error from './components/ErrorFolder/Error.jsx';
import Delivery from './components/Deliverypage/DeliveryPage.jsx';


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
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/restaurants/:cityName",
    element: <Restaurants />,
  },
  {
    path: "/RestaurantFood",
    element: <RestaurantFood />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantFood />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
  {
    path: "/FootDetailPage",
    element: <FootDetailPage />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/cartList",
    element: <CartList />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*", 
    element: <Error />,
  },
  {
    path: "/delivery", 
    element: <Delivery />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
</Provider>
);
