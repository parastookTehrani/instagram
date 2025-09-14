import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsUser() {
  const { username } = useParams();
  const [userValue, setUserValue] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://instagram-backend-ugd3.onrender.com/api/user/u/${username}`);
        setUserValue(res?.data?.user || {});
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      {/* بالای پروفایل */}
      <div className="flex items-center gap-6">
        <img
          src={userValue.profilePicture || "YOUR_DEFAULT_AVATAR_URL"}
          alt={userValue.username}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{userValue.username || "Unknown User"}</h2>
          <div className="flex gap-6 mt-2">
            <div className="text-center">
              <span className="font-bold">{userValue.followers?.length || 0}</span>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <span className="font-bold">{userValue.followings?.length || 0}</span>
              <p className="text-gray-500 text-sm">Following</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition">
            Follow
          </button>
        </div>
      </div>

      {/* توضیحات پروفایل */}
      <div className="mt-4">
        <p className="text-gray-700">{userValue.description || "No description"}</p>
      </div>
    </div>
  );
}