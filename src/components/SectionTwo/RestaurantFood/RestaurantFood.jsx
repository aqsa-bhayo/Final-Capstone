import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { addFavorite, addToCart } from "../../../redux/ProductsSlice";
import sandwichImage from '../../../assets/sendwichch.jpg';
import cheesyFriesImage from '../../../assets/cheesy fries.jpg';
import chickenWingsImage from '../../../assets/chicken wings.jpg';
import vegBurgerImage from '../../../assets/vg burger.jpg';
import onionRingsImage from '../../../assets/onion rings.jpg';
import cheesyNachosImage from '../../../assets/cheesy nochos.jpg';
import garlicBreadImage from '../../../assets/garlic bread.jpg';
import mozzarellaSticksImage from '../../../assets/moxrela sticks.jpg';
import springRollsImage from '../../../assets/spring rolls.jpg';
import bbqBurgerImage from '../../../assets/bbq burger1.jpg';
import mushroomBurgerImage from '../../../assets/mashroom burger.jpg';
import spicyBurgerImage from '../../../assets/spicy burger.jpg';
import classicBurgerImage from '../../../assets/classic burger.jpg';
import veggieBurgerImage from '../../../assets/veggie burger.jpg';
import curlyFriesImage from '../../../assets/curly fries.jpg';
import sweetPotatoFriesImage from '../../../assets/potato fries.jpg';
import chocolateShakeImage from '../../../assets/chocklate shake.jpg';
import vanillaShakeImage from '../../../assets/vanila shake.jpg';
import strawberryShakeImage from '../../../assets/strawberry shake.jpg';
import cocoColaImage from '../../../assets/coco cola.jpg';
import spriteImage from '../../../assets/sprite.jpg';
import fantaImage from '../../../assets/fanta.jpg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Tooltip } from "@mui/material";


const RestaurantFood = () => {

  const AddToCart = (product) => {
    const items = JSON.stringify(product);
    localStorage.setItem("products", items)
    navigate('/delivery')
  }
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurants = [
    {
      id: 1,
      name: "Roobi's Kitchen",
      products: [
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
      ],
    },

    // 2nd resturant 
    {
      "id": 2,
      "name": "Sitto's Kitchen",
      products: [
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
      ]
    },


    // 3rd retaurant
    {
      id: 3,
      name: "Quetta Paratha Center",
      products: [
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
      ]
    },

    // restuarant
    {
      id: 4,
      name: "Spicy Burger Center",
      products: [
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
      ]
    },
    {
      id: 5,
      name: "Traditional Roti Salan Restaurant",
      products: [
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
      ]

    },
    {
      id: 6,
      name: "AA-2 Food Center",
      products: [
        {
          title: "Starters",
          items: [
            { id: 1, name: 'Cheesy Nachos', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Crispy nachos topped with melted cheese and jalapenos.', image: cheesyNachosImage },
            { id: 2, name: 'Garlic Bread', price: 'Rs. 250', oldPrice: 'Rs. 300', description: 'Toasted bread with garlic and butter', image: garlicBreadImage },
            { id: 3, name: 'Mozzarella Sticks', price: 'Rs. 280', oldPrice: 'Rs. 320', description: 'Crispy mozzarella sticks served with marinara sauce', image: mozzarellaSticksImage },
            { id: 4, name: 'Spring Rolls', price: 'Rs. 200', oldPrice: 'Rs. 250', description: 'Crispy spring rolls filled with vegetables', image: springRollsImage },
          ],
        },
        {
          title: "Popular",
          items: [
            { id: 1, name: 'Fried Chicken Sandwich', price: 'Rs. 625.50', oldPrice: 'Rs. 700', description: 'Crispy Fried Chicken Patty, Swiss Cheese Slice, Jalapenos...', image: sandwichImage },
            { id: 2, name: 'Cheesy Fries', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Golden fries topped with melted cheese', image: cheesyFriesImage },
            { id: 3, name: 'Chicken Wings', price: 'Rs. 400', oldPrice: 'Rs. 450', description: 'Crispy fried chicken wings', image: chickenWingsImage },
            { id: 4, name: 'Veg Burger', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Vegetarian burger with fresh veggies', image: vegBurgerImage },
            { id: 5, name: 'Onion Rings', price: 'Rs. 150', oldPrice: 'Rs. 200', description: 'Crispy fried onion rings', image: onionRingsImage },
          ],
        },
        {
          title: "Premium Burgers",
          items: [
            { id: 1, name: 'BBQ Bacon Burger', price: 'Rs. 850', oldPrice: 'Rs. 900', description: 'Juicy beef patty with BBQ sauce and crispy bacon', image: bbqBurgerImage },
            { id: 2, name: 'Mushroom Swiss Burger', price: 'Rs. 780', oldPrice: 'Rs. 850', description: 'Beef patty topped with mushrooms and Swiss cheese', image: mushroomBurgerImage },
            { id: 3, name: 'Spicy Chicken Burger', price: 'Rs. 600', oldPrice: 'Rs. 650', description: 'Spicy fried chicken patty with jalapenos', image: spicyBurgerImage },
          ],
        },
        {
          title: "Shakes",
          items: [
            { id: 1, name: 'Chocolate Shake', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'Rich and creamy chocolate shake', image: chocolateShakeImage },
            { id: 2, name: 'Vanilla Shake', price: 'Rs. 300', oldPrice: 'Rs. 350', description: 'Classic vanilla shake with whipped cream', image: vanillaShakeImage },
            { id: 3, name: 'Strawberry Shake', price: 'Rs. 320', oldPrice: 'Rs. 370', description: 'Sweet and tangy strawberry shake', image: strawberryShakeImage },
          ],
        },
        {
          title: "Classic Burgers",
          items: [
            { id: 1, name: 'Classic Cheeseburger', price: 'Rs. 500', oldPrice: 'Rs. 550', description: 'Beef patty with cheddar cheese', image: classicBurgerImage },
            { id: 2, name: 'Veggie Burger', price: 'Rs. 350', oldPrice: 'Rs. 400', description: 'A healthy veggie patty with fresh toppings', image: veggieBurgerImage },
          ],
        },
        {
          title: "Fries",
          items: [
            { id: 1, name: 'Curly Fries', price: 'Rs. 180', oldPrice: 'Rs. 220', description: 'Crispy curly fries', image: curlyFriesImage },
            { id: 2, name: 'Sweet Potato Fries', price: 'Rs. 220', oldPrice: 'Rs. 250', description: 'Crispy sweet potato fries', image: sweetPotatoFriesImage },
          ],
        },
        {
          title: "Beverages",
          items: [
            { id: 1, name: 'Coca-Cola', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Refreshing Coca-Cola', image: cocoColaImage },
            { id: 2, name: 'Sprite', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Lemon-lime soda', image: spriteImage },
            { id: 3, name: 'Fanta', price: 'Rs. 100', oldPrice: 'Rs. 120', description: 'Citrusy Fanta', image: fantaImage },
          ],
        },
      ]

    },
  ];

  const restaurant = restaurants.find((rest) => rest.id === parseInt(id));

  const [activeTab, setActiveTab] = useState('All');
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cartList"));
    if (storedCart) {
      setCartList(storedCart);
    }
  }, []);

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);
    if (!isExist) {
      setCartList((prev) => [...prev, product]);

      let strCartList = JSON.stringify([...cartList, product]);
      localStorage.setItem("cartList", strCartList);
    } else {
      setOpenAlert(true);
    }
  };

   // Handle close for the Snackbar alert
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  if (!restaurant) {
    return (
      <>
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Restaurant Not Found</h1>
          <button
            onClick={() => navigate("/restaurant")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Restaurant Details */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: ' #ff3366' }}>{restaurant.name}</h1>
        <p className="text-md text-gray-600">{restaurant.description}</p>
      </div>

      {/* Tabs Section */}
      <div
        className="tabs-container"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '30px',
          marginTop: '40px',
          backgroundColor: '#f8f8f8',
          padding: '10px',
          borderRadius: '8px',
          width: '77%',
          marginLeft: '12.5%',
          marginRight: 'auto',
        }}
      >
        {['All', 'Popular', 'Starters', 'Premium Burgers', 'Classic Burgers', 'Fries', 'Shakes', 'Beverages'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              border: 'none',
              background: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#ff3366',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              borderBottom: activeTab === tab ? '2px solid #ff3366' : 'none',
              flex: 1,
              textAlign: 'center',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="p-6">
        {restaurant.products
          .filter((product) => activeTab === 'All' || product.title === activeTab) // Filter products based on the active tab
          .map((product, productIndex) => (
            <div key={productIndex} className="mb-4">
              <Container maxWidth="xl">
                {/* Adjusted title alignment to left */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold mb-2 ms-5" style={{ color: '#ff3366' }}>{product.title}</h2>
                </div>
                {/* Mobile responsive grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.items.map((item) => (
                    <div key={item.id} className="p-4 border rounded flex flex-col sm:flex-row justify-between">
                      <div className="sm:w-1/2"> {/* Adjusts width for larger screens */}
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <div className="mt-2">
                          <p className="text-lg font-bold text-blue-500">Rs. {item.price}</p>
                          {item.oldPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              Rs. {item.oldPrice}
                            </p>
                          )}
                        </div>

                        {/* <Button
                          variant="contained"
                          color="primary"
                          onClick={() => AddToCart(item)} // Calls AddToCart on button click
                          className="flex items-center gap-2 px-4 py-2 mb-2 rounded-lg text-white w-full sm:w-auto"
                          style={{
                            backgroundColor: '#ff3366',
                            borderRadius: '8px',
                            fontWeight: '600',
                            transition: 'background-color 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#ff2a5c'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff3366'}
                        >
                          <AddCircleOutlineIcon />
                          Add to Cart
                        </Button> */}

                        <Tooltip title="Add to Cart">
                          <AddCircleOutlineIcon
                            onClick={() => dispatch(addToCart(product))}  // Dispatch addToCart action
                            sx={{ fontSize: 25, color: '#1976d2', cursor: 'pointer' }}
                          />
                        </Tooltip>



                      </div>

                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-1/2 aspect-square object-cover rounded mb-2 sm:mb-0" // Mobile takes full width, larger screens take half
                      />
                    </div>
                  ))}
                </ul>
              </Container>
            </div>
          ))}
      </div>

      <Footer />
    </>


  );
};

export default RestaurantFood;