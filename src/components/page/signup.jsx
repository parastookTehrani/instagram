import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function SignUp() {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("User Name is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data) => {
try{
const res =  await axios.post("https://instagram-backend-ugd3.onrender.com/api/user/signup",{
    "username": data.username,
  "password": data.password,
  "email": data.email
})
console.log(res.data);
alert('ثبت نام موفق بود')
 navigate('/')
 
}
catch(err){
console.log(err);

}
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="email" 
          placeholder="Email" 
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input 
          type="text" 
          placeholder="User Name" 
          {...register("username")}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input 
          type="password" 
          placeholder="Password" 
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}