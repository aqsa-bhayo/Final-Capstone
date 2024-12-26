import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const RestaurantFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurantDetails = [
    {
      id: "1",
      name: "Pizza Palace",
      items: [
        { id: "p1", name: "Margherita", description: "Classic cheese pizza", price: 10 },
        { id: "p2", name: "Pepperoni", description: "Pepperoni and cheese", price: 12 },
      ],
      products: {
        Pizza: [
          { id: "p1", name: "Margherita", description: "Classic cheese pizza", price: 10 },
          { id: "p2", name: "Pepperoni", description: "Pepperoni and cheese", price: 12 },
        ],
        Beverages: [
          { id: "b1", name: "Coke", description: "Chilled Coca-Cola", price: 2 },
        ],
      },
    },
    {
      id: "2",
      name: "Burger Bistro",
      items: [
        { id: "bg1", name: "Classic Burger", description: "Juicy beef patty", price: 8 },
        { id: "bg2", name: "Veggie Burger", description: "Delicious plant-based burger", price: 7 },
      ],
      products: {
        Burgers: [
          { id: "bg1", name: "Classic Burger", description: "Juicy beef patty", price: 8 },
          { id: "bg2", name: "Veggie Burger", description: "Delicious plant-based burger", price: 7 },
        ],
        Sides: [
          { id: "s1", name: "French Fries", description: "Crispy golden fries", price: 3 },
        ],
      },
    },
  ];

  const restaurant = restaurantDetails.find((rest) => rest.id === id);

  const handlePurchase = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/delivery");
  };

  const AddToCart = (product) => {
    const items = JSON.stringify(product);
    localStorage.setItem("products", items);
    navigate("/delivery");
  };

  if (!restaurant) {
    return (
      <Container>
        <h2>Restaurant not found</h2>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <h1>{restaurant.name}</h1>
        {/* Displaying Menu Items */}
        {restaurant.items && (
          <>
            <h2>Available Items</h2>
            {restaurant.items.map((item, index) => (
              <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <Button variant="contained" color="primary" onClick={() => AddToCart(item)}>
                  Add to Cart
                </Button>
              </div>
            ))}
          </>
        )}
        {Object.entries(restaurant.products || {}).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h2>{category}</h2>
            {items.map((item) => (
              <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <Button variant="contained" color="primary" onClick={() => handlePurchase(item)}>
                  Purchase
                </Button>
              </div>
            ))}
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default RestaurantFood;
