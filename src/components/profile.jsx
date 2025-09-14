import { useState, useEffect } from "react";
import axios from "axios";
import { InstaLink } from "./instlink";


export default function Profile() {
  const [user, setUser] = useState({});
  const BASE_URL = "https://instagram-backend-ugd3.onrender.com";
  const id = localStorage.getItem("id");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposne = await axios.get(`${BASE_URL}/api/user/${id}`);

        setUser(resposne.data.user);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  console.log(user);

  return (
    <>
    <InstaLink />
    <div className="py-8 px-5 flex flex-col gap-11 bg-white">
      <div className="flex items-center gap-25 py-3 px-15 ">
        <img src="https://i.pravatar.cc/150?img=12" alt="profile" className="rounded-full" />
        <div className="flex flex-col gap-5">
            <span className="text-black text-xl">{user.username}</span>
            <div className="flex items-center gap-5 text-black  text-semibold   mt-4  flex-wrap  gap-x-10 gap-y-2 text-sm">
                <span>0 posts</span>
                <span>{user.followers ?.length}followers</span>
                <span>{user.followings ?.length}followings</span>
            </div>
            <div class="mt-5 leading-relaxed  text-black">
          <div class="font-semibold">Upvox</div>
          <div class="text-xs text-gray-500">Product/service</div>
          <div class="text-gray-800">
            Your favourite fun clips ⬆️ in your language 🌍
          </div>
          <a
            href="#"
            class="text-sky-600 hover:text-sky-700 font-medium"
          >
            upvox.net
          </a>
        </div>
        </div>
      </div>

    


    </div>
    <div className="w-full max-w-4xl mx-auto mt-8 p-6 border-b border-b-gray-300 bg-white">
        <div className="grid grid-cols-3 gap-2">
          {articles.map((item) => (
            <div key={item._id} className="aspect-square overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_incoming&w=740&q=80"
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
