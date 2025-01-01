import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";

const DeliveryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State for order confirmation
  const navigate = useNavigate();

  // Fetch cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  const handleConfirmClick = () => {
    setIsModalOpen(true); // Open modal when confirm button is clicked
  };

  const handleOrderConfirm = () => {
    setOrderConfirmed(true); // Mark order as confirmed
    setIsModalOpen(false); // Close the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleBuyMore = () => {
    navigate("/restaurants"); // Navigate to the restaurant page
  };

  return (
    <Box>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Delivery Information
          </h2>

          {/* Delivery Address Form */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Delivery Address</h3>
            <form>
              {/* Full Name */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Street Address */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Street Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your street address"
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter additional address details"
                  rows="4"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Delivery Option */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Delivery Option</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="standard">Standard Delivery (3-5 Days)</option>
                  <option value="express">Express Delivery (1-2 Days)</option>
                  <option value="same_day">Same Day Delivery</option>
                </select>
              </div>

              {/* Tip your Rider */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Tip your Rider (Optional)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a tip amount (e.g. 50)"
                  min="0"
                />
              </div>
            </form>
          </div>

          {/* Confirm Delivery Button */}
          <button
            style={{ backgroundColor: "#df3f83" }}
            className="w-full text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#df3f83] transition duration-300 ease-in-out"
            onClick={handleConfirmClick}
          >
            Confirm Delivery
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && !orderConfirmed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
              <p className="text-lg text-gray-700">
                <strong>Your order from</strong> Al Kaif Pizza & Burger - Cantt
              </p>

              {/* Custom Message */}
              <div className="mb-4">
                <p className="text-lg text-gray-700">Thank you for ordering! 😊</p>
                <p className="text-md text-gray-600">Your food is on its way and will reach your doorstep soon! 🚚🍕</p>
                <p className="text-md text-gray-600">Sit back, relax, and enjoy your meal when it arrives! 😋</p>
              </div>

              <button
                style={{ backgroundColor: "#df3f83" }}
                className="w-full text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-[#df3f83] transition duration-300 ease-in-out"
                onClick={handleOrderConfirm}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}

        {/* Order Confirmed State */}
        {orderConfirmed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for your order!</h3>
              <p>Your order has been confirmed. 🎉</p>
              <p>Your delicious food is on its way! Get ready to enjoy! 🥳🍔🍕</p>
              <button
                style={{ backgroundColor: "#df3f83" }}
                className="w-full text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#df3f83] transition duration-300 ease-in-out"
                onClick={handleBuyMore}
              >
                Buy More
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Box>
  );
};

export default DeliveryPage;
