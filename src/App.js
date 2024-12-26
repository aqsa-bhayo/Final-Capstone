import './App.css';
import PrimarySearchAppBar from './components/Header/Header';
import HeroSection from './components/HeroSection/heroSection';
import LandingCards from './components/Landig-Cards/LandingCards';
import PrepareFood from './components/Prepae-food/PrepareFood';
import LayoutSection from './components/LayoutSection/LayoutSection';
import AppDownload from './components/LayoutSection/LayoutSection';
import OfficeWork from './components/Office/OfficeWork';

import 'bootstrap/dist/css/bootstrap-grid.min.css'; 
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import Home from './Pages/Home/Home';




function App() {
  return (
    <>
    <Home />
      {/* <PrimarySearchAppBar />
      <HeroSection />
      <PrepareFood />
      <LandingCards />
      <AppDownload />
      <OfficeWork/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import SignUp from "./components/Signup/Signup";
// import Products from "./components/Products/Products";
// import DeliveryPage from "./components/Deliverypage/DeliveryPage.jsx";
// import Profile from "./components/Profile/Profile";
// import Home from "./Pages/Home/Home"
// import Header from "./components/Header/Header";




// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/delivery/:productId" element={<DeliveryPage />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//     </>
//   );
// };

// export default App;
