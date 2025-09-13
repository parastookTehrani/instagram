
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instagram from "../../assets/insta logo.svg";
import Axios from 'axios'
import axios from "axios";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
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
    <main>
      <div>
        <img src={instagram} alt="Instagram Logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} placeholder="Username" />
        {errors.username && <p>{errors.username.message}</p>}

        <input type="password" {...register("password")} placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Log in</button>
        <p>Don’t have an account? <span>Sign up</span></p>
      </form>
    </main>
  );
}