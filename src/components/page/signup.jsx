import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import instagram from "../../assets/insta logo.svg";
import { useState } from "react";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("User Name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const changeVisibility = () => {
    setShowPassword(!showPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://instagram-backend-ugd3.onrender.com/api/user/signup",
        {
          username: data.username,
          password: data.password,
          email: data.email,
        }
      );
      console.log(res.data);
      alert("ثبت نام موفق بود");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
        <div className="flex justify-center mb-8">
          <img src={instagram} alt="Instagram" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full rounded-l border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="User Name"
              {...register("username")}
              className="w-full rounded-l border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className="w-full rounded-l border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <button type="button" onClick={changeVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">{showPassword ? 'Hide' : 'Show'}</button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-l bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 my-6 transition"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <span>
              <Link
                to={"/"}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
