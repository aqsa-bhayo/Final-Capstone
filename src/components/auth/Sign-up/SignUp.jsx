import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pageBg from "../../../assets/sign-in-up.webp";
import { Snackbar } from "@mui/material";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Signed Up:", data);

    localStorage.setItem("user", JSON.stringify(data));

    setOpen(true);
    setTimeout(() => {
      navigate("/sign-in");
    }, 1000);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Full viewport height
      }}
      className="flex flex-col justify-center items-center" // Center both horizontally and vertically
    >
      <div className="w-full max-w-lg bg-white border-4 rounded-xl border-pink-500 p-10 flex flex-col items-start justify-between">
        <h2 className="text-3xl mb-7 text-pink-600 font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full mb-4">
            <label className="text-black text-lg">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="my-2 bg-transparent text-black placeholder:text-black border-2 rounded-lg w-full border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.name && { border: "2px solid red" }}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label className="text-black text-lg">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="my-2 bg-transparent w-full text-black placeholder:text-black border-2 rounded-lg border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.email && { border: "2px solid red" }}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full mb-4">
            <label className="text-black text-lg">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="my-2 bg-transparent w-full text-black placeholder:text-black border-2 rounded-lg border-pink-500 placeholder:p-2 p-2 text-lg outline-none"
              style={errors.password && { border: "2px solid red" }}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <p className="text-md my-3">
            Already have an account?{" "}
            <button
              type="button"
              className="text-pink-500 underline"
              onClick={() => navigate("/sign-in")}
            >
              Login
            </button>
          </p>

          <button
            type="submit"
            className="px-4 py-3 text-white bg-pink-500 rounded-lg hover:scale-110 transition-all w-full"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Customized Snackbar */}
      <Snackbar
        open={open}
        onClose={closeSnackbar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set to top center
      >
        <div
          style={{
            backgroundColor: "#fff", // White background
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "400px",
            color: "#EC4899", // Pink text
            fontWeight: "bold", // Bold text
            fontSize: "16px",
          }}
        >
          <span
            style={{
              textAlign: "center",
            }}
          >
            ✅ <span>Sign Up successful! Please login.</span>
          </span>
        </div>
      </Snackbar>
    </div>
  );
};

export default SignUp;
