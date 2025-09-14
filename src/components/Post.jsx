import axios from "axios"
import { useEffect } from "react"

export default function Post(){
useEffect(
    ()=>{
        const fechdata=async()=>{
            try{
                const token = localStorage.getItem("token");
                console.log(token);
                
                const res = await axios.get('https://instagram-backend-ugd3.onrender.com/api/article/timeline?page=1&limit=1',{
                   headers: {
                    Authorization: `Bearer ${token}`
                   }
                })
                // console.log(res.data);
                
            }
            catch(err){
                console.log(err);
                
            }
        }
        fechdata()
    },[]
)
    return(
        <div></div>
    )
}