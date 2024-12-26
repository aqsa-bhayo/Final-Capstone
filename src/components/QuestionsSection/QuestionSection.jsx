import React from "react";
import { Container } from "@mui/material"; // Ensure to import Container if you are using it
import CheckIcon from '@mui/icons-material/Check'; // Importing the CheckIcon

const QuestionSection = () => {
  return (
    <div>
      <div className="max-sm:mx-0 mx-16 pt-5">
        <Container maxWidth="xl" className="w-full">
          <div>
            <h1 className="max-sm:mt-28 mt-36 max-sm:text-sm mb-2 w-full text-3xl font-bold text-gray-900">
              Order food and groceries online from the best restaurants and shops on foodpanda
            </h1>
            <p className="text-zinc-500 mb-8">
              Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
            </p>
          </div>

          <div>
            <h1 className="max-sm:text-sm mb-4 w-full text-3xl font-bold text-gray-900">
              What's new?
            </h1>
            <p className="text-zinc-500">
              <CheckIcon className="text-pink-600 pe-2" />
              Wide variety of restaurants and shops, an abundance of cuisines & products.
            </p>
            <p className="text-zinc-500">
              <CheckIcon className="text-pink-600 pe-2" />
              High quality delivery service.
            </p>
            <p className="text-zinc-500">
              <CheckIcon className="text-pink-600 pe-2" />
              Live chat feature to give App users instant help when they need it.
            </p>
            <p className="text-zinc-500 mb-2">
              <CheckIcon className="text-pink-600 pe-2" />
              NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries, and more near you.
            </p>
          </div>

          <hr />

          <div>
            <h1 className="max-sm:text-sm mb-2 mt-5 w-full text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              How can I get foodpanda delivery?
            </h2>
            <p className="text-zinc-500">
              To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Which takeout restaurants open now near me?
            </h2>
            <p className="text-zinc-500">
              You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Does foodpanda deliver 24 hours?
            </h2>
            <p className="text-zinc-500">
              Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Can you pay cash for foodpanda?
            </h2>
            <p className="text-zinc-500">
              Yes, you can pay cash on delivery for foodpanda in Pakistan.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              How can I pay foodpanda online?
            </h2>
            <p className="text-zinc-500">
              You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Can I order foodpanda for someone else?
            </h2>
            <p className="text-zinc-500">
              Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              How much does foodpanda charge for delivery?
            </h2>
            <p className="text-zinc-500">
              Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              What restaurants let you order online?
            </h2>
            <p className="text-zinc-500">
              There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees, and many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Does foodpanda have minimum order?
            </h2>
            <p className="text-zinc-500">
              Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              What is the difference between delivery and Pick-Up?
            </h2>
            <p className="text-zinc-500">
              If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.
            </p>

            <h2 className="max-sm:text-sm mb-3 mt-5 w-full text-2xl font-bold text-gray-900">
              Order food and groceries online with foodpanda now and enjoy a great dining experience!
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default QuestionSection;
