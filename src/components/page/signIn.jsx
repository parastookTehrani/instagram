import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instagram from "../../assets/insta logo.svg";
import page from "../../assets/Group 91.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit =async(data) => {
  try{
     const res = await axios.post('https://instagram-backend-ugd3.onrender.com/api/user/login',{
    "username": data.username,
  "password": data.password
   })
   if(res.data){
    const token = res.data.jwt;
     localStorage.setItem("token", token)
     alert("ورود موفقیت امیز بود")
     console.log(token);
     
     
   }
  }
  catch(err){console.log(err);
  }

  

  };

  return (
    <main  className="min-h-screen flex items-center justify-center bg-gray-50 p-6 gap-80">
        <div>
            <img src={page} alt="viwe of page" />
        </div>
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white shadow p-8 ">
        {" "}
        <div className="flex justify-center mb-8">
          <img src={instagram} alt="Instagram Logo" className="h-10" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" >
          <input type="text" 
          {...register("username")} 
          placeholder="Username" 
          className="w-full h-12 rounded-md border border-gray-300 bg-gray-50 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full h-12 rounded-md border border-gray-300 bg-gray-50 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

          <button type="submit"
          className="mt-2 w-full h-12 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold transition"
          >
            Log in
            </button>
          <p className="text-center text-sm text-gray-700 mt-[114px]">
            Don’t have an account? <span className="font-medium text-blue-600"><Link to={'/SignUp'}>Sign up</Link> </span>
          </p>
        </form>
      </div>
    </main>
  );
}
