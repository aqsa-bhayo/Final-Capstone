import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Burger from "../../../assets/burger.jpg";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { addFavorite } from "../../../redux/ProductsSlice";
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
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">{restaurant.name}</h1>
        {restaurant.products.map((product, productIndex) => (
          <div key={productIndex} className="mb-4">
            <Container maxWidth="xl">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border rounded flex justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.details}</p>
                      <div className="mt-2">
                        <p className="text-lg font-bold text-blue-500">
                          Rs. {item.price}
                        </p>
                        {item.oldPrice && (
                          <p className="text-sm text-gray-500 line-through">
                            Rs. {item.oldPrice}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="text"
                        color="primary"
                        onClick={() => AddToCart(item)}
                      >
                        purchase
                      </Button>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-32 object-cover rounded mb-2"
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
