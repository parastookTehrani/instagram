import { useState, useEffect } from "react";
import axios from "axios";


export default function Profile() {
  const [user, setUser] = useState({});
  const BASE_URL = "https://instagram-backend-ugd3.onrender.com";
  const id = localStorage.getItem("id");

  //   const user = {
  //     username: "upvox_",
  //     posts: 11,
  //     followers: followers.length,
  //     following: followings.length,
  //     bio: "Your favourite fun clips in your language 🌍",
  //     website: "upvox.net",
  //     postsGrid: [
  //       "https://via.placeholder.com/300x300",
  //       "https://via.placeholder.com/300x300",
  //       "https://via.placeholder.com/300x300",
  //       "https://via.placeholder.com/300x300",
  //     ],
  //   };

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
  );
}
