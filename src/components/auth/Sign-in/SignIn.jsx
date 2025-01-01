import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pageBg from "../../../assets/sign-in-up.webp";
import { Snackbar, Alert } from "@mui/material";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });

  const handleLogin = ({ email, password }) => {
    const userData = localStorage.getItem("user");
    const parsedUser = userData && JSON.parse(userData);

    if (parsedUser && parsedUser.email === email && parsedUser.password === password) {
      setSnackbar({ open: true, message: "Login successful!", severity: "success" });
      localStorage.setItem("isLoggedIn", true);

      setTimeout(() => navigate("/"), 1000);
    } else {
      setSnackbar({ open: true, message: "Invalid email or password!", severity: "error" });
    }
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const timer = setTimeout(() => closeSnackbar(), 3000);
    return () => clearTimeout(timer);
  }, [snackbar.open]);

  return (
    <div
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
      className="flex flex-col justify-center items-center"
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white shadow-lg rounded-xl border-4 border-pink-500 p-14 px-16 min-w-96 min-h-[500px] max-w-lg flex flex-col items-start"
      >
        <h2 className="text-4xl mb-8 text-pink-600 font-bold self-center">Sign In</h2>

        <div className="w-full mb-6">
          <label className="text-black text-lg">Email</label>
          <input
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format"
              }
            })}
            placeholder="Enter your email"
            className={`my-3 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full p-3 text-lg outline-none ${
              errors.email ? "border-red-500" : "border-pink-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="w-full mb-6">
          <label className="text-black text-lg">Password</label>
          <input
            type="password"
            {...register("password", { 
              required: "Password is required" 
            })}
            placeholder="Enter your password"
            className={`my-3 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full p-3 text-lg outline-none ${
              errors.password ? "border-red-500" : "border-pink-500"
            }`}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <p className="text-md mb-6">
          Don't have an account?{" "}
          <button
            className="text-pink-500 underline hover:text-pink-700"
            onClick={() => navigate("/sign-up")}
            type="button"
          >
            Sign Up
          </button>
        </p>

        <button
          className="px-6 py-4 text-white bg-pink-500 rounded-lg w-full hover:scale-105 transition-transform text-lg"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {/* Customized Snackbar */}
      <Snackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            backgroundColor: "#fff", // White background
            color: "#EC4899", // Pink text color
            fontWeight: "bold", // Bold text
            fontSize: "16px", // Font size
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow effect
            textAlign: "center", // Center text alignment
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
